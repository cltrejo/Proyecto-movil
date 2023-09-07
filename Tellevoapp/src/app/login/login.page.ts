import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  hide = true;
  user : string ='';

  constructor(private router: Router) {}

  pasarUsuario() {
    this.router.navigate(['/home', this.user]);
  }
}
