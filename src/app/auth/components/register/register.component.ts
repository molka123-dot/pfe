import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {
    username: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router:Router,private router1 : ActivatedRoute ,private service:ServicesService ,private fb:FormBuilder) { }
 
  
 
  submitForm() {
    if (this.isFormValid()) {
      console.log(this.userData);
      alert(" Sign Up successfully ");
      this.router.navigate(['/about']);
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  }

  isFormValid(): boolean {
    return this.userData.username !== null && 
           this.userData.email !== null && 
           this.userData.password !== null && 
           this.userData.confirmPassword !== null 

}
ngOnInit(): void {
}
}