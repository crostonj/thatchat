import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./chat/message.component";
import { userListComponent } from "./userList/userList.component";
import { MessageInputComponent } from "./chat/message-input.component";
import { MessagesComponent } from "./chat/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./shared/header/header.component";
import { ListComponent } from "./chat/message-list.component";
import { routing } from "./app.route";
import {APP_BASE_HREF} from '@angular/common';



@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        MessageInputComponent,
        MessageComponent,
        MessagesComponent,
        userListComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    bootstrap: [AppComponent]
})
export class AppModule {

}