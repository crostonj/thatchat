import { Component, Host, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from "./message.model";
import { ChatService } from "./chat.service";
//import { AppComponent } from "../app.component";
import { NgForm } from "@angular/forms/forms";
import { MessagesComponent } from "./messages.component";
import { AppComponent } from "../app.component";
import { User } from "../auth/user.model";


@Component({
    selector : 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    socket = null;
    app = null;
    currentUser : User = null;
    constructor(private chatService: ChatService){
    }

    ngOnInit() {
        this.socket = io(this.chatService.CHAT_HOST);
        this.currentUser = this.chatService.getCurrentUser();

    }
    onSend(form: NgForm){
       	console.log('new message from client to websocket: ', form.value.content);
           console.log(form);
        
        const message = new Message(form.value.content, this.currentUser.lastName , new Date().getDate().toString());
        
        this.chatService.addMessage(message)
            .subscribe(
                data => {
                    this.socket.emit('new message');
                },
                error => console.log(error)
            );
        

        form.reset();
    }

}