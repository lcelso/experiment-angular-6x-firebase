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
  users: any;
  edit = false;
  submitted = false;
  teste: any;

  userLogin: any;

  teste2 = false;

  dateLogin: Users = new Users();

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    // this.teste.once('value').then(function(snap) {
    //   snap.forEach(item => {

    //     item.value

    //     // if (item.child('name').toJSON() === 'marquinhos') {
    //     //   itemValue = item.toJSON();
    //     //   // console.log(itemValue);
    //     // }
    //   });
    //   // console.log(itemValue);
    //   // this.userLogin = itemValue;
    // });

    // this.teste.transaction(function(currentData) {
    //   console.log(currentData);
    // });

    // this.teste = this.usersService.getTest('name', 'marquinhos');

    // this.teste.orderByChild('name').equalTo('marquinhos').on('child_added', function(snapshot) {
    //   console.log(snapshot.val().email);
    //   console.log(snapshot.val().password);
    // });


    this.usersService.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(users => {
      this.users = users;
    });

  }

  recuperaUser(data, typeEmail, typePass) {
    this.userLogin = this.usersService.getTest(typeEmail, data.email);
    console.log(this.userLogin);

    if (this.userLogin.email === data.email && this.userLogin.password === data.password) {
      console.log('logado');
      this.teste2 = !this.teste2;
    } else {
      console.log('errrouuuuuuuuu')
    }

  }

  login() {
    console.log(this.dateLogin);
    this.recuperaUser(this.dateLogin, 'email', 'password')
  }

  onSubmit(user) {
    this.toogleEdit(user.key, false);
    delete user['edit'];
    this.saveUser(user);
  }

  saveUser(user) {
    this.usersService.updateUser(user.key, user);
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
    this.usersService.deleteUser(userKey);
  }
}
