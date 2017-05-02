
import { Message } from "./message.model";
import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http"
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx';
import { UserService } from "../userList/user.service";
import { SafeUser } from "../userList/safeuser.model";

@Injectable()
export class ChatService {
    constructor(private http: Http, private userService: UserService){}



    public CHAT_HOST = 'http://10.212.9.115:5000/';
    private messageSvcUrl = this.CHAT_HOST + 'message';
    private currentUser: SafeUser;
    private messages: Message[] = [];

   addMessage(messageArg: Message){
        console.log('SvcUrl: ' + this.messageSvcUrl);

        this.messages.push(messageArg);
        const body = JSON.stringify(messageArg);
        console.log('body = ' + body);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token') 
            : '';
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.messageSvcUrl + token, body, options)
                .map((response: Response) => {
                    const result = response.json();
                    const message = new Message(result.content, result.lastname, result.datetime, result._id);
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

    getCurrentUser(){
        let userId = localStorage.getItem('userId');
        return this.userService.getUser(userId)
        .subscribe(
            data => {
                return data.json()
            },
            error => console.error(error)
        );
     }

}