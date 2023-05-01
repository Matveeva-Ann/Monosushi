import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE } from '../../constants/roles.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthCabinetGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') as string );
      if (currentUser && currentUser.role === ROLE.USER && Number(currentUser.id) === Number(route.params['id'])) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
  }
  
}
