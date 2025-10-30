import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  customerType: string;
  email: string;
  displayName: string;
}

export interface CustomerPage {
  content: Customer[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface CustomerFilter {
  page: number;
  size: number;
  sort: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }

  getCustomers(filter: CustomerFilter): Observable<CustomerPage> {
    // Implementazione della chiamata API con i parametri di filtro
    return this.http.post<CustomerPage>(this.apiUrl, filter);
  }
}
