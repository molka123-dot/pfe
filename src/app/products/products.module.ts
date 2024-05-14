import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    
 ContactComponent, AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink

  ]
})
export class ProductsModule { }
