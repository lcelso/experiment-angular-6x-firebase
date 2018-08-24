import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { LOGIN_VALUE } from '../../state-management/actions/segment.actions';
import { Segment } from '../../state-management/state/segment.state';

import { UserService } from '../../services/users.service';
import { Users } from '../../services/users.model';
import { MethodsFirebaseService } from '../../services/methodsFirebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private basePath = '/users';
  users: any;
  userLogin: any;
  dateLogin: Users = new Users();

  isLogged = false;
  isNotLogged = false;

  constructor(
    private usersService: UserService,
    private router: Router,
    private store: Store<Segment>) {}

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

    if (this.userLogin !== undefined && this.userLogin.email === data.email && this.userLogin.password === data.password) {
      this.isLogged = !this.isLogged;
      this.store.dispatch({
        type: LOGIN_VALUE,
        payload: {
          email: this.userLogin.email,
          name: this.userLogin.name,
          isLogged: this.isLogged
        },
      });
      return this.router.navigateByUrl('/cadastros/lista');
    }

    console.log('errrouuuuuuuuu');
    this.isNotLogged = !this.isNotLogged;
  }

  loginIn() {
    this.recuperaUser(this.dateLogin, 'email');
  }

}
