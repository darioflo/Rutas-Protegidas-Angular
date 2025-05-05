import { inject } from '@angular/core';
import { CanMatchFn, MaybeAsync, GuardResult, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanMatchFn = (
  route,
  segments
): MaybeAsync<GuardResult> => {
  const router = inject(Router).createUrlTree(['/login']);

  return inject(AuthService).user$.pipe(
    map((user) => {
      if (user) {
        return true; // Permite la navegación si el usuario está autenticado
      }
      console.error('Acceso denegado: Usuario no autenticado');
      return router; // Bloquea la navegación si no hay usuario
    })
  );
};
