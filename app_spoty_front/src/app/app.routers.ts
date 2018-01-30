import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SingupComponent} from "./components/singup/singup.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuardService} from './services/auth-guard.service';

const app_routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: 'registro', component: SingupComponent },
    {
       path:'dashboard',component:DashboardComponent,
       canActivate:[AuthGuardService]
    },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
