import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin;

    constructor(private autchService: AuthService, private router: Router) {

    }

    login(formValues) {
        this.autchService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
