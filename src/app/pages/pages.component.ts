import { Component } from '@angular/core';

import { UserService } from '../services/users.service';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [UserService]
})
export class PagesComponent {
}
