import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Auth0Service} from "../../services/auth0.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`


    `]
})
export class LoginComponent implements OnInit {

    public LoginData: FormGroup;
    public is_ready: boolean = false;
    public mostrar_alert = Object({
        msg: 'Ocurrio un error',
        class_css: 'alert-danger',
        is_valid: false,
    });

    constructor(public router: Router, private userLogin: UserService, private _auth0: Auth0Service) {
        if (this._auth0.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
        this.LoginData = new FormGroup({
            'email': new FormControl('miguel.cabrera.app@gmail.com', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
            'password': new FormControl('password', [Validators.required, Validators.minLength(5)]),
            'gethash': new FormControl('true')
        });
    }

    ngOnInit() {
    }

    valida_login_form() {
        this.is_ready = true;

        if (this.LoginData.valid) {
            this.userLogin.login(JSON.stringify(this.LoginData.value)).subscribe(data => {
                console.log(data);
                this.mostrar_alert.is_valid = true;
                if (data.token) {
                    this.mostrar_alert.class_css = 'alert-success';
                    this.mostrar_alert.msg = 'Todo salió bien';
                    localStorage.setItem('tk_plug', data.token);
                    localStorage.setItem('user_data', JSON.stringify(data.user_data));
                    this.router.navigate(['dashboard'])
                } else {
                    this.mostrar_alert.class_css = 'alert-danger';
                    this.mostrar_alert.msg = 'Ocurrio un error al intentar acceder';
                }
                setTimeout(() => {
                    this.mostrar_alert.is_valid = false;
                }, 3000);
            }, (error: any) => {


                if (error) {
                    error = error.json();
                    console.log(error);
                    this.mostrar_alert.is_valid = true;
                    this.mostrar_alert.class_css = 'alert-danger';
                    this.mostrar_alert.msg = error.message;
                    setTimeout(() => {
                        this.mostrar_alert.is_valid = false;
                    }, 3000);
                }
            });
        }

    }


    registro() {
        this.router.navigate(['registro']);
    }


    mostrar_errors(controls_name: string, is_ready: boolean): boolean {
        return this.userLogin.mostrar_errores(this.LoginData, controls_name, this.is_ready);
    }


}
