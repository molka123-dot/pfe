import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AboutComponent } from './products/components/about/about.component';
import { ContactComponent } from './products/contact/contact.component';

const routes: Routes = [
  {path: "register" , component: RegisterComponent},
  {path: "login" , component: LoginComponent},
  {path: "contact" , component: ContactComponent},
  {path: "about" , component: AboutComponent},
  {path: "**" , redirectTo:"register" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
