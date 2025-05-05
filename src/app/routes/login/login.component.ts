import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
