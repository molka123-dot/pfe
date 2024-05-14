import { Component } from '@angular/core';
import { ServicesService } from './auth/services/services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service : ServicesService){
    
  }
  title = 'app';
}
