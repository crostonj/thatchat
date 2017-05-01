
import { Message } from "./message.model";
import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http"
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChatService {
    constructor(private http: Http){}


    public CHAT_HOST = 'http://127.0.0.1:5000/';
    private messageSvcUrl = this.CHAT_HOST + 'message';

    private messages: Message[] = [];

   addMessage(messageArg: Message){
        console.log('SvcUrl: ' + this.messageSvcUrl);

        this.messages.push(messageArg);
        const body = JSON.stringify(messageArg);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token') 
            : '';
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.messageSvcUrl + token, body, options)
                .map((response: Response) => {
                    const result = response.json();
                    const message = new Message(result.content, result.user, result.datetime, result._id);
                    this.messages.push(message);
                    return message;
                })
                .catch((error: Response) => Observable.throw(error));
    }

    getMessages(){
        return this.http.get(this.messageSvcUrl)
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, message.user,  message.datetime, message._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}