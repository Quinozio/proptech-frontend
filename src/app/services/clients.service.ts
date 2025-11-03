import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { PrivateClient, BusinessClient } from '../models/client.model';

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
  // sort: string[];
}

@Injectable({
  providedIn: "root",
})
export class ClientsService {
  private apiUrl = `${environment.apiUrl}/v1/customers`;
  private privateClientUrl = `${environment.apiUrl}/v1/customers/individual`;
  private businessClientUrl = `${environment.apiUrl}/v1/customers/business`;

  constructor(private http: HttpClient) {}

  getCustomers(filter: CustomerFilter): Observable<CustomerPage> {
    return this.http.get<CustomerPage>(this.apiUrl, { params: filter as any});
  }

  createPrivateClient(client: PrivateClient): Observable<PrivateClient> {
    return this.http.post<PrivateClient>(this.privateClientUrl, client);
  }

  createBusinessClient(client: BusinessClient): Observable<BusinessClient> {
    return this.http.post<BusinessClient>(this.businessClientUrl, client);
  }
}
