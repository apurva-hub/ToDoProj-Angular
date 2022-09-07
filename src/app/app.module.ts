import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ToDoDataService } from './to-do-data.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ToDoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
