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
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getUsers().snapshotChanges().pipe(
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
