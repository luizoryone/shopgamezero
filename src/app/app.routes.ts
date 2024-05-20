import { Routes } from '@angular/router';
import { IniciozeroComponent } from './iniciozero/iniciozero.component';
import { LoginzeroComponent } from './loginzero/loginzero.component';

export const routes: Routes = [
    {path:'inicio', component: IniciozeroComponent},
{path:'login', component: LoginzeroComponent},
{path:'', redirectTo:'/inicio',pathMatch:'full'}
];
