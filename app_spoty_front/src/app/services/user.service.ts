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
    getHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //   headers.append('authorization', 'Bearer BQDXpMJFzj9TS30FfpR8kNZyGQ4sH6l3cRAwG9d5TXYKupP1yj0b4vnik1HBXt6A0scxhy8sp9aA0CT59J84kKl0HWmvgqFtejlwJv_0FO_2ryApyX0uG38Bl6Vh0E_oPbzNOEnl7a8yYlqn');
        return headers;
    }



}
