import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string = "http://localhost:5555/api/customers"

  constructor(
    private http: HttpClient
    ) { }

    list(): Observable<Customer[]>{
      return this.http.get(`${this.url}`) as Observable<Customer[]>;
    }
    get(id:number): Observable<Customer>{
      return this.http.get(`${this.url}/${id}`) as Observable<Customer>;
    }
    create(C:Customer):Observable<Customer>{
      return this.http.post(`${this.url}`, C) as Observable<Customer>;
    }
    change(C:Customer):Observable<any>{
      return this.http.put(`${this.url}/${C.id}`, C) as Observable<Customer>;
    }
    remove(id:number): Observable<any>{
      return this.http.delete(`${this.url}/${id}`) as Observable<any>;
    }
  }
  