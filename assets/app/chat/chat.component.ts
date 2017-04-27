import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Message } from "./message.model";
import * as io from "socket.io-client";
import { ChatService } from "./chat.service";

@Component({
    selector: 'app-chat-discussion',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit{
    socket = null;
    
    constructor(private chatService: ChatService){}
    conversation = this.chatService.getMessages();

    ngOnInit() {
        this.socket = io('http://127.0.0.1:8000/', {});
        this.socket.on('connect', function () {
            console.log('connected!');
        });
        this.socket.on('chatUpdate', function(data) {
            console.log(data)
            this.conversation.push(data);
        }.bind(this));
    }
}