import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/auth/services/services.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }

}
