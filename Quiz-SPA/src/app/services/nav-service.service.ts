import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:3005/users';
  
  getAllUsers(){
    return this.http.get(this.baseURL);
  }
  
  getUserById(id: any){
    return this.http.get(`${this.baseURL}/${id}`);
  }


}
