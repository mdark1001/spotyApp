import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogosService} from "../../services/catalogos.service";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {
    public UserDataUpdate: FormGroup;
    private id_usuario: number;
    public estados: any;
    public is_ready = false;
    public is_succes = false;

    constructor(private atctivateRouter: ActivatedRoute, public _userService: UserService, public _cat: CatalogosService) {
        this._cat.getCoreEstadosCatalogo().subscribe(data => this.estados = data.data);
        this.UserDataUpdate = new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellidop': new FormControl('', Validators.required),
            'apellidom': new FormControl(''),
            'email': new FormControl('', [Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
            'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'password2': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'id_estado': new FormControl('', Validators.required)
        });
        this.atctivateRouter.params.subscribe(params => {
            console.log(params);
            this.id_usuario = params['id'];
            this._userService.getUserById(this.id_usuario).subscribe(data => {
                this.setObjectValues(data.user);

            });
        });
    }

    ngOnInit() {
    }

    setObjectValues(data) {
       for (let i in data) {
            if (this.UserDataUpdate.controls.hasOwnProperty(i)) {
                this.UserDataUpdate.controls[i].setValue(data[i]);
            }
        }
    }

    mostrar_errors(prop_object, is_reade) {
        return this._userService.mostrar_errores(this.UserDataUpdate, prop_object, is_reade);
    }

    actualizaUsuario() {
        this.is_ready = true;
        if (this.UserDataUpdate.valid) {
            this._userService.updateUser(this.id_usuario,JSON.stringify(this.UserDataUpdate.value)).subscribe(data=>{
                console.log(data);
                if(data.user){
                    this.is_succes=true;
                    setTimeout(()=>{this.is_succes=false},3000);
                }else{
                    alert("Ocurrio un error por favor intentelo más tarde");
                }
            })
        }
    }
}
