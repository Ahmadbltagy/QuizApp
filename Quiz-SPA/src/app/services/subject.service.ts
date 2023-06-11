import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  baseUrl = 'http://localhost:3005/';

  constructor(private _http: HttpClient) {}

  get all() {
    return this._http.get(`${this.baseUrl}Subjects`)
  }

  byId(id: number) {
    return this._http.get(`${this.baseUrl}Subjects/${id}`)
  }

  updateSubject(id: number, subject: any) {
    return this._http.put(`${this.baseUrl}Subjects/${id}`, subject)
  }

  addSubject(subject:any){
    return this._http.post(`${this.baseUrl}Subjects`,subject)
  }

  deleteSubject(id:number){
    return this._http.delete(`${this.baseUrl}Subjects/${id}`)
  }
}
