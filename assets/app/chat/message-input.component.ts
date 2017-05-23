import { Component, Host, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from "./message.model";
import { ChatService } from "./chat.service";
import { NgForm } from "@angular/forms/forms";
import { MessagesComponent } from "./messages.component";
import { AppComponent } from "../app.component";
//import { User } from "../auth/user.model";
import { SafeUser } from "../userList/safeuser.model";
import { UserService } from "../userList/user.service";


@Component({
    selector : 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    socket = null;
    app = null;
    currentUser : SafeUser = null;
    constructor(private chatService: ChatService, private userService: UserService){
    }

    ngOnInit() {

        let userId = localStorage.getItem('userId');

        this.socket = io(this.chatService.CHAT_HOST);
        this.userService.getUser(userId)
            .subscribe(
                data => {
                        this.currentUser = data;
                },
                error => console.log(error)
            );

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