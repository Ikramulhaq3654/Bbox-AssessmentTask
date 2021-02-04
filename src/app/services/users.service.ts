import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string; };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  public userList: Array<UserDetail> = [];
  public userList$: BehaviorSubject<Array<UserDetail>> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<Array<UserDetail>> {
    return this._http.get<Array<UserDetail>>(this._baseUrl)
      .pipe(
        tap(res => {
          this.userList = res;
          this.userList$.next(this.userList);
        })
      )
  }

  public addUser(payload: UserDetail): Observable<any> {
    return this._http.post(this._baseUrl, payload).pipe(
      tap(res => {
        res.id = this.userList.length ? this.userList[this.userList.length - 1].id + 1 : 1;
        this.userList.push(res);
        this.userList$.next(this.userList);
      })
    )
  }

  public deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this._baseUrl}/${id}`).pipe(
      tap(() => {
        this._filterUser(id);
        this.userList$.next(this.userList);
      })
    )
  }

  private _filterUser(id: number): Array<UserDetail> {
    this.userList = this.userList.filter(user => user.id !== id);
    return this.userList;
  }

}
