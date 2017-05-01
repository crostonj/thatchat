import { Component, Input, Output, OnInit, Host, ViewChild, ElementRef } from "@angular/core";
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

     @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    constructor(private chatService: ChatService){
    }

    getExistingMessages(){
        this.chatService.getMessages()
                .subscribe(
                   (messages: Message[]) => {
                        this.messages = messages
                   } 
                );

        this.scrollToBottom();  
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

    ngOnInit() {

        this.getExistingMessages();

        this.socket = io(this.chatService.CHAT_HOST);
        this.socket.on('connect', function () {
            console.log('connected!');
        });
        this.socket.on('chatUpdate', function(data) {
            this.chatService.getMessages()
                .subscribe(
                   (messages: Message[]) => {
                        this.messages = messages
                   } 
                )
        }.bind(this));

        this.scrollToBottom();  
    }
}