import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ToDoDataService } from './to-do-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from './modal/modal.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
    ForgotpasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ToDoDataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
