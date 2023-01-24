import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(localStorage.getItem('RoleId'), localStorage.getItem('RoleId') === 'AdministratorClubUser'); 
    const isAuthorized = localStorage.getItem('RoleId') === 'AdministratorClubUser';
    if(!isAuthorized){
      this.router.navigate(['/home']);
    }
    return isAuthorized;
  }
  
}
