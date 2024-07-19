import { Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { LoginFormComponent } from './login-form/login-form.component';


export const routes: Routes = [
   {
      path:'',component:LoginFormComponent
   },
   {
    path:'DisplayData',component:DisplayDataComponent
   }
];
