import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { APP_BASE_HREF } from '@angular/common';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./chat/message.component";
import { userListComponent } from "./userList/userList.component";
import { MessageInputComponent } from "./chat/message-input.component";
import { MessagesComponent } from "./chat/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./shared/header/header.component";
import { ListComponent } from "./chat/message-list.component";
import { routing } from "./app.route";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./userList/user.service";



@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        MessageInputComponent,
        MessageComponent,
        MessagesComponent,
        userListComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent

    ],
    imports: [
        BrowserModule,
        FormsModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }, AuthService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {

}