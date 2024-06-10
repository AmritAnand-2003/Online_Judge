import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  private baseUrl: string = "http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }

  getProblems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/main/problems/`)
  }

  getProblemById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/main/problems/${id}`);
  }
  runCode(data: {code: string; language: string; input_data: string;}): Observable<any> {
    return this.http.post(`${this.baseUrl}/main/run/`, data)
  }
  submitCode(data: {code: string; language: string; problem: string;}): Observable<any> {
    return this.http.post(`${this.baseUrl}/main/submit/`, data)
  }
}
