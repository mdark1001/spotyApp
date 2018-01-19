import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CatalogosService} from "../../services/catalogos.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: []
})
export class RegisterComponent implements OnInit {
    usuario: Object = {
        nombre: '',
        apellidop: '',
        apellidom: '',
        email: '',
        password: '',
        sexo: '1',
        id_estado: "",
        confirmacion: false
    };

    estados=[];

    constructor(public _cat_core:CatalogosService ) {

    }

    ngOnInit() {
        this._cat_core.getCoreEstadosCatalogo().subscribe(data=>{
            this.estados=data.data;
        });
    }

    validar_registro_usuario(form: NgForm) {
        console.log(form.value);
    }

}
