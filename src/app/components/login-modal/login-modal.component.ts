import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {

  formLogin: FormGroup;
  hide = true;
  
  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>, 
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  

  getErrorMessage(field: FormControl) {

   if (field.hasError('required')) {
     return 'Esse campo é obrigatório';
   } else if (field.hasError('email')) {
     return 'Email inválido';
   }


    return 'Erro 404';
  }

  login() {
    if (this.formLogin.valid) {
      this.dialogRef.close();
      this.router.navigate(['./sucesso'])
    }
    
    console.log(this.formLogin.controls)
  }

}
