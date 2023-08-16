import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  register(form: NgForm) {
    // if (form.valid) {
    //   this.router.navigate(['./sucesso'])
    // }
    console.log(form.controls)
  }

}
