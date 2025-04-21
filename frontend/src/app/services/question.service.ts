import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private apiUrl = `${environment.apiUrl}/questions`;

  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getQuestion(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  postQuestion(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
