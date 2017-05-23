import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { SafeUser } from "./safeuser.model";

@Injectable()
export class UserService {

    public USERHOST = 'http://server:5000/';
    private userSvcUrl = this.USERHOST + 'user'
    private userList = [];

    constructor(private http: Http){}

    getUser(userID: String){
        return this.http.get(this.userSvcUrl + '/' + userID)
            .map((response: Response) => {
                const user = response.json().user;

                const transformedUser = new SafeUser(
                    user.firstName,
                    user.lastName,
                    user.email);

                return transformedUser;
            })
             .catch((error: Response) => Observable.throw(error));            
    }

    getUserList(){
        return this.http.get(this.userSvcUrl)
            .map((response: Response) => {
                const userlist = response.json().userList;
                let safeuserList: SafeUser[] = [];

                for (let user of userlist) {
                    safeuserList.push(new SafeUser(user.firstName, user.lastName,  user.email));
                }
                this.userList = safeuserList;
                return safeuserList;
            })
    }
}
