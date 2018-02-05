import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/*Components*/
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './components/register/register.component';

/*Routers*/
import {APP_ROUTING} from "./app.routers";

/*Services*/
import {AuthGuardService} from "./services/auth-guard.service";
import {CatalogosService} from "./services/catalogos.service";
import {UserService} from "./services/user.service";


import {Auth0Service} from "app/services/auth0.service";
import { ArtistComponent } from './components/artist/artist.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        SingupComponent,
        DashboardComponent,
        ArtistComponent,
        ProfileComponent

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
        UserService,
        Auth0Service
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
