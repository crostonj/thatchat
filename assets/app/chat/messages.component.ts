import { Component, Input } from "@angular/core"
import { ChatService } from "./chat.service";


@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    providers: [ChatService],
})

export class MessagesComponent{     
        
}