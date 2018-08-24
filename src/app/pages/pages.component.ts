import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserService } from '../services/users.service';
import { Segment } from '../state-management/state/segment.state';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [UserService]
})
export class PagesComponent implements OnInit {

  currentUrl: string;
  isLogged: boolean;
  isUser: object;

  constructor(private router: Router, private store: Store<Segment>) {
    this.store.select('segmentReducer').subscribe((state: Segment) => {
      this.isUser = state.payload;
      this.isLogged = state.payload.isLogged;
    });

    router.events.subscribe((data: any) => {
      this.currentUrl = data.urlAfterRedirects;

      if (data.urlAfterRedirects === '/cadastros/lista' && !this.isLogged ||
        data.urlAfterRedirects === '/cadastros/incluir' && !this.isLogged ) {
        this.router.navigateByUrl('/cadastros/login');
      }
    });
  }

  ngOnInit() {
  }
}
