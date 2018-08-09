import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../services/users.service';

@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.component.scss']
})
export class ListaComponent implements OnInit {

  public users: Observable<any[]>;
  constructor(private usersService: UserService) { }

  ngOnInit() {
    // const dataObj = {
    //   name: 'Maria do Bairro',
    //   email: 'maria@dobairro.com.br'
    // };
    // this.usersService.addUsers(dataObj);
    this.users = this.getUsers('/users');
  }

  getUsers(path) {
    return this.usersService.getUsers(path);
  }

}
