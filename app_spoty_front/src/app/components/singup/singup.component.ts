import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogosService} from "../../services/catalogos.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

    public UserRegister: FormGroup;
    public is_ready: boolean = false;
    public is_succes:boolean=false;
    estados = [];

    constructor(private _cat: CatalogosService, private _uss: UserService) {
        this.UserRegister = new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellidop': new FormControl('', Validators.required),
            'apellidom': new FormControl(''),
            'email': new FormControl('', [Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
            'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'password2': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'id_estado': new FormControl('', Validators.required),
            'confirmacion': new FormControl(false),
        });
    }

    ngOnInit() {
        this._cat.getCoreEstadosCatalogo().subscribe(data => this.estados = data.data);
    }

    validate_pass_equals(control: FormControl): { [s: string]: boolean } {
        console.log(control.value);
        console.log(this);
        if (control.value !== this) {
            return {
                nopasa: true
            }
        }
        return null;
    }

    /*
    This is magic function, implements
    add class for show or hide  errors for a input form
    your  validations laws
      */
    mostrar_errors(controls_name: string, is_ready: boolean): boolean {
        if (this.UserRegister.controls.hasOwnProperty(controls_name) && is_ready) {

            const control = this.UserRegister.controls[controls_name];
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

    validar_registro_usuario() {
        this.is_ready = true;
        if (this.UserRegister.valid) {
            this._uss.createUser(JSON.stringify(this.UserRegister.value)).subscribe(data => {
                if(data.user._id){
                    this.is_ready=false;
                    this.UserRegister.reset();
                    this.is_succes=true;
                    setTimeout(()=>this.is_succes=false,3000);
                }
            })
        }
        return 0;
    }

}
