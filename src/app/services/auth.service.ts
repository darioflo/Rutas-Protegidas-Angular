import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private user = new BehaviorSubject<string | null>(
    localStorage.getItem(this.tokenKey)
  );
  user$ = this.user.asObservable();

  login(correo: string, contraseña: string): boolean {
    // Aquí iría llamada HTTP real; por ahora simulamos:
    if (correo && contraseña) {
      this.user.next(correo.slice(0, 6));
      localStorage.setItem(this.tokenKey, 'dummy-token');
      localStorage.setItem('correo', correo);
      localStorage.setItem('contraseña', contraseña);
      return true;
    }
    if (correo === 'darioflo19@icloud.com') {
      localStorage.setItem('rol', 'admin');
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('correo');
    localStorage.removeItem('contraseña');
    this.user.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
