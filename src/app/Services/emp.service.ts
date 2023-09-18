import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url: string = environment.memberUrl
  constructor(public http : HttpClient) { }

  getEmp(id:any){
    return this.http.get(this.url + id)
  }

  updateMember(data :any, id :any){
    return this.http.put(this.url + id,data)
  }
}
