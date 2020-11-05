import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../model/contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {
  }

  finById = (id: number): Observable<Contact> => this.http.get<Contact>(this.url + '/' + id);

  getContacts = (): Observable<Contact[]> => this.http.get<Contact[]>(this.url);

  saveContact = (contact: Contact): Observable<Contact> => this.http.post<Contact>(this.url, contact);

  updateContact = (contact: Contact): Observable<Contact> => this.http.put<Contact>(this.url, contact);

  deleteContact = (id: number) => this.http.delete(this.url + '/' + id);

}
