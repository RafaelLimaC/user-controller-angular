import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './custom-validator';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {

  formRegister: FormGroup;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>, 
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formRegister = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
    ])
    ],
    confirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
    ])]
    },{ validator: ConfirmPasswordValidator.MatchPassword})
  }

  register() {
    if (this.formRegister.valid) {
      this.dialogRef.close();
      this.router.navigate(['./sucesso'])
    }

    console.log(this.formRegister.controls)
  }

}
