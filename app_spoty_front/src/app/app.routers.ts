import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const app_routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: 'registro', component: RegisterComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
