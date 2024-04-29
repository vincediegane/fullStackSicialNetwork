import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Role } from 'src/app/enums/role.enum';
import { AppUser } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUser: AppUser | undefined;
  users: AppUser[] = [];

  constructor() {
    this.users.push(
      { id: 1, firstName: 'Vincent', lastName: 'Faye', password: '123456', email: 'vincediegane@gmail.com', role: Role.ADMIN, createdAt: new Date() },
      { id: 2, firstName: 'Roxy', lastName: 'Diouf', password: '123456', email: 'roxy@gmail.com', role: Role.USER, createdAt: new Date() }
    );
  }

  public login(email: string, password: string): Observable<AppUser> {
    let authUser = this.users.find(user => user.email === email);
    if(!authUser) return throwError(() => new Error('User not found'));
    if(authUser.password !== password) return throwError(() => new Error('Bad credentials'));

    return of(authUser);
  }

  public authenticateUser(appUser: AppUser): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({ id: appUser.id, firstName: appUser.firstName, lastName: appUser.lastName, email: appUser.email, role: appUser.role, token: 'JWT_AUTH_TOKEN' }));

    return of(true);
  }

  public hasRole(role:string): boolean {
    return this.authenticatedUser!.role.toString().includes(role);
  }

  public isAuthenticated(): boolean {
    return this.authenticatedUser !== undefined;
  }

  public logout(): Observable<boolean> {
    this.authenticatedUser = undefined;
    localStorage.removeItem('authUser');
    this.users = [];

    return of(true);
  }
}
