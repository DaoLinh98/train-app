import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Tiêm Router vào hàm
  const isLoggedIn = false; // Giả sử chưa đăng nhập

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
