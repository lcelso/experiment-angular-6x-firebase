import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Users } from '../services/users.model';

@Injectable()
export class UserService {

  private basePath = '/users';
  usersLists: AngularFireList<Users> = null;

  userId: string;

  constructor(private db: AngularFireDatabase) {
    this.usersLists = db.list(this.basePath);
  }

  getTest(type, value) {
    const ref = this.db.database.ref(this.basePath);
    let itemUser;
    ref.orderByChild(type).equalTo(value).on('child_added', function(snapshot) {
      itemUser = snapshot.val();
    });
    return itemUser;
  }

  getUsers(): AngularFireList<Users> {
    return this.usersLists;
  }

  createUser(user: Users): void {
    this.usersLists.push(user);
  }

  updateUser(key: string, value: any): void {
    this.usersLists.update(key, value).catch(error => this.handleError(error));
  }

  deleteUser(key: string): void {
    this.usersLists.remove(key).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
