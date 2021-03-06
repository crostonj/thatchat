
import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./chat/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const defaultRoute =  localStorage.getItem('token') ? '/messages' : '/auth/signin';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);