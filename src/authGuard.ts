import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (!user) {
    next('/');
  } else {
    next();
  }
}
