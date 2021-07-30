import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
];

@NgModule({
  declarations:[],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
