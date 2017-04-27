
import { Message } from "./message.model";
import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChatService {
    constructor(private http: Http){}

    public CHAT_HOST = 'http://127.0.0.1:3000/';


    private messages: Message[] = [];

    addMessage(message: Message){

        this.messages.push(message);
        const body = JSON.stringify(message);
        return this.http.post(this.CHAT_HOST + 'message', body)
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}