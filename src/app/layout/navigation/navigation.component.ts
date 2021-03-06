import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../login/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

   toggleNav() {
    if(this._authService.checkLogin()){
      return true;
    }else{
      return false;
    }
  } 
}
