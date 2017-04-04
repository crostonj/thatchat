import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component"
import { MessageComponent } from "./message/message.component";

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        MessageComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}