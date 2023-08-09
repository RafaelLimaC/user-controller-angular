import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/components/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/components/register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, dialog: string): void {
    if (dialog === 'login') {
      this.dialog.open(LoginModalComponent, {
        width: 'fit-content',
        minWidth: '350px',
        enterAnimationDuration,
        exitAnimationDuration,
      });  
    } else if (dialog === 'register') {
      this.dialog.open(RegisterModalComponent, {
        width: 'fit-content',
        minWidth: '350px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }


  }
}
