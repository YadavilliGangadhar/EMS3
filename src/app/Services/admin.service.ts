import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getContact:any = [];
  url: string = environment.adminUrl
  constructor(public http : HttpClient) { 

  }
  getMembers(){
    return this.http.get(this.url)
  }

  postMember(data:any){
    return this.http.post(this.url, data);
  }

  getSingleMember(id:any){
    return this.http.get(this.url + id);
  }

  updateMember(data:any, id:any){
    return this.http.put(this.url + id, data);
  }

  deleteMember(id : any){
    return this.http.delete(this.url + id)
  }

  
}

