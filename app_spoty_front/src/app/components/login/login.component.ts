import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        div.ng-invalid.ng-touched:not(form){
            color :#a94442;
            border-color: #a94442 !important;
            border:1px solid  #a94442 !important;
            box-shadow: 0 0 10px #ce001c;
        }
    
    `]
})
export class LoginComponent implements OnInit {
    usuario_login: Object = {
        email:'ejemplo@gmail.com',
        password:'password'
    };

    constructor(public router:Router) {
    }

    ngOnInit() {
    }

    valida_login_form(formLogin: NgForm) {
        console.log(formLogin.value);
        console.log(this.usuario_login);
        console.log("Mensaje de posteo");
    }
    registro(){
        this.router.navigate(['registro']);
    }

}
