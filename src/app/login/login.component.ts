import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {
  user = new User();
  erreur=0;
  constructor(private authService : AuthService,
    private router: Router) { }
  ngOnInit() {}
  onLoggedin(){
     console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/']);
    else
    // alert('Login ou mot de passe incorrecte!');
    this.erreur = 1;
    }
}
