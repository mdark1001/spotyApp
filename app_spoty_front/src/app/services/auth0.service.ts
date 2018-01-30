import {Injectable} from '@angular/core';

// En cargado de hacer la validación en el api de Node


@Injectable()
export class Auth0Service {

    constructor() {
    }

    isAuthenticated() {
        let token=localStorage.getItem('tk_plug');
        if(token!=null && token !=undefined){
             return true;
        }
        return false;
    }


}
