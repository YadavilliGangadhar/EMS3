import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

//npx json-server --watch db.json

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  apiUrl=environment.authUrlUser

  apiUrlRole= environment.apiUrlRole

  //get all method - users table
  GetAll(){
    return this.http.get(this.apiUrl);
  }

  //get single method - users table
  GetbyCode(code:any){
    return this.http.get(this.apiUrl+'/'+code);
  }

  //get role method - role table
  GetAllRole(){
    return this.http.get(this.apiUrlRole);
  }

  //register method - users table
  proceedRegister(inputData:any){
    return this.http.post(this.apiUrl, inputData)
  }

  //update method - users table
  updateUser(code:any, inputData:any){
    return this.http.put(this.apiUrl+'/'+code, inputData)
  }

  //login method - users table
  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  //get userrole method - role table
  getUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}

