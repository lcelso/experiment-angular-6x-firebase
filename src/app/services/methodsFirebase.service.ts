import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class MethodsFirebaseService {

  constructor(private db: AngularFireDatabase) {}

  private listData(path) {
    let item: AngularFireList<any> = null;
    item = this.db.list(path);
    return item;
  }

  private handleError(error) {
    console.log(error);
  }

  queryItem(path, type, value) {
    let itemUser;
    const ref = this.db.database.ref(path);

    ref.orderByChild(type).equalTo(value).on('child_added', function(snapshot) {
      itemUser = snapshot.val();
    });

    return itemUser;
  }

  getListData(path) {
    return this.listData(path);
  }

  create(path, data): void {
    const create = this.listData(path);
    create.push(data);
  }

  update(path, key: string, value: any): void {
    const data = this.listData(path);
    data.update(key, value).catch(error => this.handleError(error));
  }

  delete(path, key: string): void {
    const data = this.listData(path);
    data.remove(key).catch(error => this.handleError(error));
  }
}
