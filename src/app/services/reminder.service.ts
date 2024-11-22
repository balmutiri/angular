import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private apiUrl = 'https://localhost:44374/api/app/reminder/remind-me'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  sendReminder(reminderData: any): Observable<any> {
    console.log(reminderData);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, reminderData, { headers }).pipe(
      catchError((error) => {
        console.error('Error sending reminder:', error);
        throw error;
      })
    );
  }
}
