import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { SafeUser } from "./safeuser.model";

@Injectable()
export class UserService {

    public USERHOST = 'http://10.212.9.115:5000/';
    private userSvcUrl = this.USERHOST + 'user'


    constructor(private http: Http){}

    getUser(userID: String){
        return this.http.get(this.userSvcUrl + '/' + userID)
            .map((response: Response) => {
                const user = response.json().user;
                let transformedUser: SafeUser = null;

                transformedUser = new SafeUser(
                    user.firstName,
                    user.lastName,
                    user.email);

                return transformedUser;
            })
             .catch((error: Response) => Observable.throw(error));            
    }
}
