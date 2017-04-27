import { Component, Input, Output, OnInit, Host } from "@angular/core";
import { Message } from "./message.model";
import * as io from "socket.io-client";
import { ChatService } from "./chat.service";
import { AppComponent } from "../app.component";


@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',

})
export class ListComponent implements OnInit{

    private socket = null;
    private app = null;
    public messages = [];

    constructor(private chatService: ChatService){
    }

    ngOnInit() {
        this.socket = io(this.chatService.CHAT_HOST);
        this.socket.on('connect', function () {
            console.log('connected!');
        });
        this.socket.on('chatUpdate', function(data) {
            this.messages  = this.chatService.getMessages();
        }.bind(this));
    }
}