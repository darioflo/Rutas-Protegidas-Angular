import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const roles = route.data?.['roles'] as string[];

  return inject(AuthService).user$.pipe(
    map((user) => {
      if (!user) {
        return false;
      }
      return roles.some((rol) => roles.includes(rol));
    })
  );
};
