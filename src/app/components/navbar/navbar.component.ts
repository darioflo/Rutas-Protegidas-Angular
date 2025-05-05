import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  user: string | null = null; // Variable para almacenar el valor actual de user$

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Suscríbete al observable user$
    this.authService.user$.subscribe((user) => {
      this.user = user; // Actualiza la variable local cuando user$ cambia
      console.log('Cambio detectado en user$: ', user);
    });
  }

  logout(): void {
    this.authService.logout(); // Llama al método de logout del servicio
  }
}
