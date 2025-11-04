import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

export interface Permission {
  id: number;
  authority: string;
  description: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface User {
  id: number;
  username: string;
  email: string | null;
  roles: Role[];
}

export interface UserPage {
  content: User[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface UserFilter {
  page: number;
  size: number;
  // sort: string[];
}

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private apiUrl = `${environment.apiUrl}/api/v1/users`;

  constructor(private http: HttpClient) {}

  getUsers(filter: UserFilter): Observable<UserPage> {
    // Implementazione della chiamata API con i parametri di filtro
    return this.http.get<UserPage>(this.apiUrl, { params: filter as any});
  }
}
