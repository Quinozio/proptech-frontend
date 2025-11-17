import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';

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
    currentPage: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface UserFilter {
  page: number;
  size: number;
  // sort: string[];
}

export interface CreateUser {
  username: string;
  email: string;
  password?: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = `/api/v1/users`;
  private apiRolesUrl = `/api/v1/roles`;

  constructor(private http: HttpClient) {}

  getUsers(filter: UserFilter): Observable<UserPage> {
    // Implementazione della chiamata API con i parametri di filtro
    return this.http.get<UserPage>(this.apiUrl, { params: filter as any });
  }

  getRoles(): Observable<Role[]> {
    return this.http
      .get<{ content: Role[] }>(this.apiRolesUrl)
      .pipe(map((response) => response.content));
  }

  createUser(user: CreateUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
