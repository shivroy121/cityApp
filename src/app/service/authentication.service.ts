import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username, password) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.post<User>('http://localhost:8080/auth/login',{username, password}).pipe(
       map(
         userData => {
          console.log(userData["token"])
          sessionStorage.setItem('token',userData["token"]);
          return userData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('token')
  }
}