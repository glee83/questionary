import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SeviceService {


  readonly baseUrl = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.baseUrl + "/question");
  }

  select() {
    return this.http.put
  }
}
