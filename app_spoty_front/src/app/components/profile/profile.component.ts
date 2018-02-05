import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-profile',
    templateUrl:'./profile.component.html',
    styles: []
})
export class ProfileComponent  implements OnInit {
    public UserDataUpdate:FormGroup;
    constructor(private atctivateRouter:ActivatedRoute,public _userService:UserService ) {
        this.UserDataUpdate=new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellidop': new FormControl('', Validators.required),
            'apellidom': new FormControl(''),
            'email': new FormControl('', [Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
            'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'password2': new FormControl('', [Validators.required, Validators.minLength(4)]),
            'id_estado': new FormControl('', Validators.required)
        })
        this.atctivateRouter.params.subscribe(params=>{
            console.log(params);
            this._userService.getUserById(params['id']).subscribe(data=> this.UserDataUpdate=data);
        })
    }

    ngOnInit() {
    }
    mostrar_errors(){
      return false;
    }
}
