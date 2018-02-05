import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from "../../services/auth-guard.service";
import {Auth0Service} from "../../services/auth0.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {
    public UserData;

    constructor(public _auth0Gard: Auth0Service, private  router: Router) {
        this.UserData = this._auth0Gard.getUserData();
    }

    ngOnInit() {
    }

    loguout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }


}
