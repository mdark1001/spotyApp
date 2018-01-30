import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from "../../services/auth-guard.service";
import {Auth0Service} from "../../services/auth0.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public _auth0Gard:Auth0Service) {

  }

  ngOnInit() {
  }



}
