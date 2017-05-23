import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { UserService} from './user.service'
import { SafeUser } from "./safeuser.model";

@Component({
    selector: 'chat-user-list',
    templateUrl: './userList.component.html'
})
export class userListComponent implements OnInit{

    private users = [];
    constructor(private userService: UserService){

    }
    ngOnInit(): void {
        this.userService.getUserList()
            .subscribe(
                (users: SafeUser[]) =>
                    {
                        this.users = users
                    });
    }



    // Users: User[] = [
    //     new User('crostonj@gmail.com', 'password', 'Jeff', 'Croston'),
    //     new User('drecastro@msn.com', 'password', 'Elsa', 'Castro'),
    //     new User('pcroston101@outlook.com', 'password', 'Phoebe', 'Croston'),
    //     new User('doleson@5280solutions.com', 'password', 'Dave', 'Oleson')        
    // ]
 }