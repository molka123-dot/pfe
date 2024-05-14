import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    username:'',
    email:'',
    password:''
  };
  loginObj:any = {
    username:'',
    password:''
  }
  
  constructor(private router:Router) { }

  ngOnInit(): void {
   const localData = localStorage.getItem('signupUsers');
   if(localData != null){
    this.signupUsers = JSON.parse(localData);
   }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj= {
      username:'',
      email:'',
      password:''
    };
  }

onLogin(){
const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
if(isUserExist != undefined ){
  alert(" Log In successfully");
  this.router.navigate(['/about']);

}else{

  alert(" wrong credentials ");

}

}
 
  






/*  submit(){
     alert(" Log In successfully");

  this.router.navigate(['/about'])
  }*/

}
