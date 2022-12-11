import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)    
  }
  getPassword=(value:any)=>{
    return this.http.post("http://localhost:8080/password",value)
  }
  getProfile=(value:any)=>{
    return this.http.post("http://localhost:8080/profile",value)
  }
  addComplaints=(value:any)=>{
    return this.http.post("http://localhost:8080/addComplaint",value)
  }
  viewComplaints=()=>{
    return this.http.get("http://localhost:8080/viewAllComplaints")
  }
}
