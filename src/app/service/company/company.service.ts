import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url =  'http://localhost:3000/company';
  constructor(private http: HttpClient) { }

  gatCompanies = this.http.get<Company[]>(this.url);
}
