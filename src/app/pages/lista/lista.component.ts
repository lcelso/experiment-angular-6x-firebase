import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { LOGIN_VALUE } from '../../state-management/actions/segment.actions';
import { Segment } from '../../state-management/state/segment.state';

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
  dateLogin: Users = new Users();

  constructor(private usersService: UserService, private store: Store<Segment>) {
  }

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
