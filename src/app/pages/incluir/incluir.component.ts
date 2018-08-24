import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Segment } from '../../state-management/state/segment.state';
import { UserService } from '../../services/users.service';
import { Users } from '../../services/users.model';

@Component({
    selector: 'app-incluir',
    templateUrl: 'incluir.component.html',
    styleUrls: ['incluir.component.scss']
})
export class IncluirComponent implements OnInit {

  private basePath = '/users';

  users: Users = new Users();
  submitted = false;

  constructor(private userService: UserService, private store: Store<Segment>) {
  }

  ngOnInit() {}

  newUser(): void {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.saveUser();
  }

  saveUser() {
    this.userService.createUser(this.basePath, this.users);
    this.users = new Users();
  }
}
