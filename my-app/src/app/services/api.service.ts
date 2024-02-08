import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8500/api'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }

  getAudios(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/audio`);
  }

  addAudio(audioData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/audio`, audioData);
  }

  updateAudio(audioId: string, audioData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/audio/${audioId}`, audioData);
  }

  deleteAudio(audioId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/audio/${audioId}`);
  }
}