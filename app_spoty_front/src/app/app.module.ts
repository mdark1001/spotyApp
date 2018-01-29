import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/*Components*/
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './components/register/register.component';

/*Routers*/
import {APP_ROUTING} from "./app.routers";

/*Services*/
import {AuthGuardService} from "./services/auth-guard.service";
import {CatalogosService} from "./services/catalogos.service";

import {UserService} from "./services/user.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        SingupComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        AuthGuardService,
        CatalogosService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
