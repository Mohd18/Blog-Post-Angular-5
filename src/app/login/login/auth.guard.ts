import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

    toggleNav = false;
    constructor(private _authService: AuthService, private _router:Router) { 
        
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         
            if(this._authService.checkLogin()) {
                return true;
            }else{
                this._router.navigate(['/signin'])
                this.toggleNav = false;
                return false;
            }
        }
}
