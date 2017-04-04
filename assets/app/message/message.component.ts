import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent{
    @Input() message: Message;
    @Output() messageSend = new EventEmitter<string>();

    onSend(){
        this.messageSend.emit('A new value')
    }
}