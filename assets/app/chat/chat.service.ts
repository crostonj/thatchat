
import { Message } from "./message.model";

export class ChatService {
    public CHAT_HOST = 'http://127.0.0.1:3000/';



    private messages: Message[] = [];

    addMessage(message: Message){
        this.messages.push(message);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}