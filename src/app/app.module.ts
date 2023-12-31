import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './shared/footer/footer.component';
import { SucessoLoginComponent } from './components/sucesso-login/sucesso-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterModalComponent,
    LoginModalComponent,
    HeaderComponent,
    FooterComponent,
    SucessoLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
