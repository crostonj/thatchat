import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component"
import { MessageComponent } from "./chat/message.component";
import { userListComponent } from "./userList/userList.component";
import { MessageInputComponent } from "./chat/message-input.component";


@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        MessageComponent,
        userListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}