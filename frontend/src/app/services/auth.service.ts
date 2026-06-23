import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private loggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Verifica se já está logado (no localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  setLoginStatus(sucesso: boolean, token: string): void {
    if (sucesso) {
      localStorage.setItem('token', token);
      this.loggedIn.next(true);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}