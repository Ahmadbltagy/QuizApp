import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  baseUrl = 'http://localhost:3005/';

  constructor(private _http: HttpClient) {}

  get all() {
    return this._http.get(`${this.baseUrl}Subjects`);
  }
  byId(id: number) {
    return this._http.get(`${this.baseUrl}Subjects/${id}`);
  }
}
