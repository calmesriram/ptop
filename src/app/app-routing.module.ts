import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuradGuard } from './services/auth-gurad.guard';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[AuthGuradGuard]        
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuradGuard]        
  },
  {
    path:'menu',
    component:MenuComponent,
  },
  {
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
