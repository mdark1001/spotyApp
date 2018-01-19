import {Injectable} from '@angular/core';

// Se encarga de consumir el token y validar la sesión
@Injectable()
export class AuthGuardService {

    constructor() {
    }

    public isAuthenticated(): boolean {
        return false;
    }

}
