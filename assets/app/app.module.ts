import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component"
import { MessageComponent } from "./message/message.component";
import { userListComponent } from "./userList/userList.component";


@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        MessageComponent,
        userListComponent
        

    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}