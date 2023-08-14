import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessoLoginComponent } from './components/sucesso-login/sucesso-login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginModalComponent
  },
  {
    path: 'cadastro',
    component: RegisterModalComponent
  },
  {
    path: 'sucesso',
    component: SucessoLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
