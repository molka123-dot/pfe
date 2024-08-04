import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  
  envoyer(){

    alert("message envoyé");
    this.route.navigate(['about']);

  }
  envoyer3(){

    
    this.route.navigate(['contact'])

  }
  envoyer1(){

    
    this.route.navigate(['login'])

  }
  envoyer2(){

    
    this.route.navigate(['about'])

  }

}
