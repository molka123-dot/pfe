import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  envoyer(){

    
    this.route.navigate(['contact'])

  }
  envoyer1(){

    
    this.route.navigate(['login'])

  }
  envoyer2(){

    
    this.route.navigate(['about'])

  }
}
