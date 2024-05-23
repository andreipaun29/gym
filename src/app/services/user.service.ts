import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {

private userIdSource = new BehaviorSubject<number | null>(null);
private userFirstNameSource = new BehaviorSubject<string | null>(null);
private userLastNameSource = new BehaviorSubject<string | null>(null);
private userEmailSource = new BehaviorSubject<string | null>(null);
private userPasswordSource = new BehaviorSubject<string | null>(null);


  currentUserId = this.userIdSource.asObservable();
  currentUserFirstName = this.userFirstNameSource.asObservable();
  currentUserLastName = this.userLastNameSource.asObservable();
  currentUserEmail = this.userEmailSource.asObservable();
  currentUserPassword = this.userPasswordSource.asObservable();


  setCurrentUserId(userId: number | null) {
    this.userIdSource.next(userId);
  }

  setCurrentUserFirstName(firstName: string | null) {
    this.userFirstNameSource.next(firstName);
  }

  setCurrentUserLastName(lastName: string | null) {
    this.userLastNameSource.next(lastName);
  }

  setCurrentUserEmail(email: string | null) {
    this.userEmailSource.next(email);
  }

  setCurrentUserPassword(password: string | null) {
    this.userPasswordSource.next(password);
  }
  


    private users: User[] | any = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          password: '123456'
        },
        {
          id: 2,
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin',
          password: 'admin',
        },
      ];
  constructor() { 
    
  }

  getAllUsers(): Observable<User[]>{
    return of(this.users);
  }

  delete(id: number): void{
    let indexToDelete = this.users.findIndex((user: { id: number; }) => user.id == id);

    if (indexToDelete === -1) {
      return;
    }
    this.users.splice(indexToDelete, 1);
  }

  update(updatedUser: User): void{
    let userId = this.users.find((_user: { id: number; }) => _user.id = updatedUser.id )?.id
    if(userId == undefined){
      return;
    }
    this.users[userId] == updatedUser;
  }

  add(user: User): void{
    this.users.push(user);
  }


}