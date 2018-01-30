import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Auth0Service} from "./auth0.service";

@Injectable()
export class AuthGuardService implements CanActivate {


    constructor(private _auth0:Auth0Service) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       if(this._auth0.isAuthenticated()){
           return true;
       }
       return false;
    }


}
