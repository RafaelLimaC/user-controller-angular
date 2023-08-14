import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, private router: Router) {}
  
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  getErrorMessage(field: FormControl) {

   if (field.hasError('required')) {
     return 'Esse campo é obrigatório';
   } else if (field.hasError('email')) {
     return 'Email inválido';
   }


    return 'Erro 404';
  }

  login(form: NgForm) {
    // if (form.valid) {
    //   this.router.navigate(['./sucesso'])
    // }
    console.log(form.controls)
  }

}
