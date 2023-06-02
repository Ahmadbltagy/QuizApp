import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl: string = "http://localhost:3000/subjects"

  constructor(private api:HttpClient) {  }

  GetExam(subjectId: number){
    return this.api.get( `${this.apiUrl}/${subjectId}`)
  }
}
