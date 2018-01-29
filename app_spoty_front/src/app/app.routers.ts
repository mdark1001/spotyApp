import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SingupComponent} from "./components/singup/singup.component";

const app_routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: 'registro', component: SingupComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
