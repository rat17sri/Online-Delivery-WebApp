import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(
        private router: Router,
        // private accountService: AccountService
    ) {
        console.log('Auth Service');
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const user = this.accountService.userValue;
        let user = null;
        if (user) {
            // authorised so return true
            return false;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}