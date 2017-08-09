import { Component } from "@angular/core";

import { ChatService } from "../chat/chat.service";

@Component({
    selector: 'chat-history',
    templateUrl: './chatHistory.component.html'
})
export class ChatHistoryComponent{
    constructor(private chatService: ChatService){
        
    }
}