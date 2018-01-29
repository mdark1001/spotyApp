import {Headers} from '@angular/http';
export class AppSettings {
    public static API_ENDPOINT = 'http://localhost:3977/api/';

    public static getHeaders(): Headers {
        return new Headers({
            'Content-Type': 'application/json'
        })
    }
}