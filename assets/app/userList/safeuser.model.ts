export class SafeUser {
    constructor( public firstName: string, 
                 public lastName: string,
                 public email: string, 
                 public userId?: string, 
                 ) {
    }
}