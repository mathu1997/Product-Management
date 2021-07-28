import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(){}

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      userId:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      roles:new FormControl('',[Validators.required])
      
    });
  } 
  loginProcess(){
    
   }
}
