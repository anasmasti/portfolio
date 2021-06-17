import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactMessage(data: Contact): Observable<Contact> {
    try {
      return this.http.post<Contact>(`${environment.API_URL + environment.API_VERSION}contact`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Api-Key-Access': environment.API_KEY,
        })
      });
    } catch (error) {
      return error
    }
  }
}
