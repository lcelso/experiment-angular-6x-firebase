import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { UserService } from '../../services/users.service';
import { Users } from '../../services/users.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  private basePath = '/users';
  users: any;
  edit = false;
  submitted = false;
  userLogin: any;
  isLogged = false;
  dateLogin: Users = new Users();

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getListData(this.basePath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(users => {
      this.users = users;
    });
  }

  recuperaUser(data, typeEmail) {
    this.userLogin = this.usersService.searchUserData(this.basePath, typeEmail, data.email);
console.log(this.userLogin);

    if (this.userLogin.email === data.email && this.userLogin.password === data.password) {
      // this.store.dispatch({ type: LOGIN_UPDATE_VALUE, payload: { value: data.itemSelectedValue } });
      return this.isLogged = !this.isLogged;
    }
    console.log('errrouuuuuuuuu');
  }

  loginIn() {
    this.recuperaUser(this.dateLogin, 'email');
  }

  onSubmit(user) {
    this.toogleEdit(user.key, false);

    delete user['edit'];
    this.saveUser(user);
  }

  saveUser(user) {
    this.usersService.updateUser(this.basePath, user.key, user);
  }

  editUser(userKey) {
    this.toogleEdit(userKey, true);
  }

  toogleEdit(userKey, value) {
    this.users.forEach(user => {
      if (user.key === userKey) {
        user.edit = value;
      }
    });
  }

  deleteUser(userKey) {
    this.usersService.deleteUser(this.basePath, userKey);
  }
}
