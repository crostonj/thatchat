import { Component } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from "./message.model";
import { ChatService } from "./chat.service";


@Component({
    selector : 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent{


    socket = null;
     constructor(private chatService: ChatService){}


    ngOnInit() {
        // if (sessionStorage.getItem("userName") === null){
        //     this._router.navigate(['Registration']);
        // }
        this.socket = io('http://127.0.0.1:8000/' ,{});

    }
    onSend(value: string){
       	console.log('new message from client to websocket: ', value);
        const message = new Message(value, 'Jeff', new Date().getDate().toLocaleString());
        this.chatService.addMessage(message);
        this.socket.emit('new message', message);
    }
}