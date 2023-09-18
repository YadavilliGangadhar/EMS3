import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  getMember:any = [];
  url: string = environment.managerUrl
  constructor(public http : HttpClient) { }

  getMembers(){
    return this.http.get(this.url)
  }

  updateMember(data:any, id:any){
    return this.http.put(this.url + id, data);
  }

  getSingleMember(id:any){
    return this.http.get(this.url + id);
  }
}
