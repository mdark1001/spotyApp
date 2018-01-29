import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CatalogosService} from "../../services/catalogos.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: []
})
export class RegisterComponent implements OnInit {

   public FormularioRegistro: FormGroup;

    estados = [];

    constructor(public _cat_core: CatalogosService) {
        this.FormularioRegistro = new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellidop': new FormControl('', Validators.required),
            'apellidom': new FormControl(''),
            'email': new FormControl('', [Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
            'password': new FormControl('', Validators.required),
            'id_estado': new FormControl("", Validators.required),
            'confirmacion': new FormControl(false),
        });

        /*this.FormularioRegistro.controls['password'].setValidators([
            Validators.required,
            this.validaPassword.bind(this.FormularioRegistro)

        ])*/
    }

    ngOnInit() {
        this._cat_core.getCoreEstadosCatalogo().subscribe(data => {
            this.estados = data.data;
        });


    }

    validar_registro_usuario() {
        console.log(this.FormularioRegistro.value);
        console.log(this.FormularioRegistro);
        //this.FormularioRegistro.setValue({ } );
        //this.FormularioRegistro.reset({ });
        //this.FormularioRegistro.controls['confirmacion'].setValue('');
    }
    validar_personalizada(control:FormControl):{[s:string]:boolean}{
        if(control.value=='example'){
            return {
                nopasa:true
            }
        }
        return null;
    }
    validaPassword(control:FormControl):{[s:string]:boolean}{
        if(control.value=='example'){
            return {
                nopasa:true
            }
        }
        return null;
    }
    validarUserName(control:FormControl): Promise<any>|Observable<any>{
         return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               if(control.value=="mdark")
                   resolve({existe:true });

               else resolve(null)
           },3000)
        });
    }

}
