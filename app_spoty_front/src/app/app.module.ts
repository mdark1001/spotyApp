import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/*Components*/
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './components/register/register.component';

/*Routers*/
import {APP_ROUTING} from "./app.routers";

/*Services*/
import {AuthGuardService} from "./services/auth-guard.service";
import {CatalogosService} from "./services/catalogos.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        AuthGuardService,
        CatalogosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
