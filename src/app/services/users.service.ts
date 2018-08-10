import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Users } from '../services/users.model';

@Injectable()
export class UserService {

  private basePath = '/users';
  usersLists: AngularFireList<Users> = null;

  constructor(private db: AngularFireDatabase ) {
    this.usersLists = db.list(this.basePath);
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
