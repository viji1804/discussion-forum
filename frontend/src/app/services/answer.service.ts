import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // import environment

@Injectable({ providedIn: 'root' })
export class AnswerService {
  private apiUrl = environment.apiUrl; // use the URL from environment

  constructor(private http: HttpClient) {}

  // Get answers for a specific question
  getAnswers(questionId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/questions/${questionId}/answers`
    );
  }

  // Post an answer to a question
  postAnswer(questionId: number, data: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/questions/${questionId}/answers`,
      data
    );
  }

  // Like an answer
  likeAnswer(answerId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/answers/${answerId}/like`, {});
  }
}
