
import { User } from "./user.model";
import { Injectable } from "@angular/core";
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Response, Headers } from "@angular/http";

@Injectable()
export class AuthService {

    public DATA_HOST = 'http://10.212.9.115:5000/';
    private userSvcUrl = this.DATA_HOST + 'user/';

    constructor(private http: Http){
        
    }
     signup(user: User){
         const body = JSON.stringify(user);
         const headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.userSvcUrl, body, options)
                            .map((response: Response) => response.json())
                            .catch((error: Response) => Observable.throw(error));
     }

    signin(user: User){
         const body = JSON.stringify(user);
         const headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.userSvcUrl + 'signin', body, options)
                            .map((response: Response) => response.json())
                            .catch((error: Response) => Observable.throw(error));
     }

     logout(){
         localStorage.clear();
     }

     isLoggedin(){
         return localStorage.getItem('token') != null;
     }
}