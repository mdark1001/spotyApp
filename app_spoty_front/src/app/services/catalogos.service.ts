import {Injectable} from '@angular/core';
import {AppSettings} from "./config.services";
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogosService {
    uri_source: string = '';

    constructor(private http: Http) {
        this.uri_source = AppSettings.API_ENDPOINT + 'catalogo/';
        console.log(this.uri_source);
    }

    getCoreEstadosCatalogo() {
        let header = this.getHeader();


      return  this.http.get(this.uri_source + 'estados').map(data => {
            console.log(data.json());
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
