import {Injectable} from '@angular/core';

// En cargado de hacer la validación en el api de Node


@Injectable()
export class Auth0Service {

    constructor() {
    }

    isAuthenticated() {
        return false;
    }

}
