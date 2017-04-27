import { Component, Host } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from "./message.model";
import { ChatService } from "./chat.service";
//import { AppComponent } from "../app.component";
import { NgForm } from "@angular/forms/forms";
import { MessagesComponent } from "./messages.component";
import { AppComponent } from "../app.component";


@Component({
    selector : 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent{
    socket = null;
    app = null;
    constructor(private chatService: ChatService){
    }

    ngOnInit() {
        this.socket = io(this.chatService.CHAT_HOST);

    }
    onSend(form: NgForm){
       	console.log('new message from client to websocket: ', form.value.content);
           console.log(form);
        const message = new Message(form.value.content, 'Jeff', new Date().getDate().toLocaleString());
        this.chatService.addMessage(message);
        this.socket.emit('new message');

        form.reset();
    }
}