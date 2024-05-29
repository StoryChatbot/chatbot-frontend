
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateStoryService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  generateStory(prompt: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generate_story`, { prompt: prompt });
  }
}
