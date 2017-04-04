import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "../message/message.model";

@Component({
    selector: 'chat-discussion',
    templateUrl: './chat.component.html'
})
export class ChatComponent{
    messages: Message[] = [
        new Message('Hello Jeff', 'Elsa'),
        new Message('what are you up to?', 'Jeff'),
        new Message('Leaving work and the way home', 'Elsa'),
        new Message('OK, I should be home by 5:00', 'Jeff')
    ];

}