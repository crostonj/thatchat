import { Component } from '@angular/core';
import { ChatService } from "./chat/chat.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ChatService]
})
export class AppComponent {
    
}