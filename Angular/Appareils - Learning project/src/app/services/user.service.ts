import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService{
    private users: User[] = [
        new User("Prénom","Nom","prenom.nom@mail.fr","cafe",["coder","boire du café","ciné","bowling"])
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user:User){
        this.users.push(user);
        this.emitUsers();
    }
}