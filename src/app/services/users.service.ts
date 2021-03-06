import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

export interface Item {
  name: string;
}

@Injectable()
export class UserService {

  private basePath = '/users';
  constructor(private db: AngularFireDatabase) { }

  addUsers(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }


  getUsers(path): Observable<any[]> {

    this.db.list('/').valueChanges().subscribe(actions => {
      actions.forEach(action => {
        console.log(action)
        // console.log(action.payload.ref.database)
        // console.log(action.payload.node_.children_.root_);
        // const value = action.payload.val();
        // const id = action.payload.key;
        // this.todosKeyValues.set(id, value);
      });
    });

    return this.db.list(path).valueChanges();
  }
}
