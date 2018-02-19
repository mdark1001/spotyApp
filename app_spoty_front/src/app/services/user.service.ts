import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {AppSettings} from "./config.services";
import 'rxjs/Rx';

@Injectable()
export class UserService {
    private url_app = `${AppSettings.API_ENDPOINT}user`;

    constructor(private _http: Http) {
    }

    createUser(params: any) {
        const url = `${this.url_app}/add`;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(url, params, {headers}).map(data => {
            console.log(data);
            return data.json();
        });
    }
    getUserById(id_user) {
        console.log(id_user);
        const utl = `${this.url_app}/user/${id_user}`;
        const headers = this.getHeadersToken();
        return this._http.get(utl, {headers: headers}).map(data => {
            return data.json();
        });
    }
    login(data) {
        const url = `${this.url_app}/login`;
        const headers = this.getHeader();
        return this._http.post(url, data, {headers}).map(data => data.json());
    }
     updateUser(id_usuario,data){
         const url = `${this.url_app}/edit/${id_usuario}`;
         const headers = this.getHeadersToken();
         return this._http.put(url, data, {headers}).map(data => data.json());
     }

    /*HELPERS to Headers*/
    getHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //   headers.append('authorization', 'Bearer BQDXpMJFzj9TS30FfpR8kNZyGQ4sH6l3cRAwG9d5TXYKupP1yj0b4vnik1HBXt6A0scxhy8sp9aA0CT59J84kKl0HWmvgqFtejlwJv_0FO_2ryApyX0uG38Bl6Vh0E_oPbzNOEnl7a8yYlqn');
        return headers;
    }

    getHeadersToken() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('tk_plug')
        });
        return headers;
    }

    /*
  This is magic function, implements
  add class for show or hide  errors for a input form
  your  validations laws
  HELPERS
    */
    mostrar_errores(object_validate, controls_name, is_ready) {
        if (object_validate.controls.hasOwnProperty(controls_name) && is_ready) {

            const control = object_validate.controls[controls_name];
            if (control.invalid === true) {
                if (control.errors.hasOwnProperty('required') && control.errors.required === true) {
                    return true;
                }
                if (control.errors.hasOwnProperty('minlength') && control.errors.minlength.actualLength < control.errors.minlength.requiredLength) {
                    return true;
                }
                if (control.errors.hasOwnProperty('pattern') && control.errors.pattern === true) {
                    return true;
                }
            }
        }
        return false;
    }


}
