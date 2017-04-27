export class Message {
    constructor( public content: string, 
                 public username: string,
                 public datetime: string, 
                 public messageId?: string, 
                 ) {
    }
}