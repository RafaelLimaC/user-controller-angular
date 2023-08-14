import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  constructor(public dialogRef: MatDialogRef<RegisterModalComponent>) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  register(form: NgForm) {
    // if (form.valid) {
    //   this.router.navigate(['./sucesso'])
    // }
    console.log(form.controls)
  }

}
