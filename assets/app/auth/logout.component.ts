import { Component, Host } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-logout',
    template: `
    <div>
        <i class="fa fa-sign-out"></i>  <a ui-sref="login" (click)="onLogout()">Log Out </a>
    </div>
    `

})
export class LogoutComponent{
    constructor(private authService: AuthService, private router: Router){}

    onLogout(){
        this.authService.logout();
        this.router.navigate(['auth', 'signin']);
        console.log('logout');
    }
}