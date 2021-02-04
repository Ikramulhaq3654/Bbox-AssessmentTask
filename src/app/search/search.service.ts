import { UsersService, UserDetail } from './../services/users.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private service: UsersService) { }

  public getSearchResults(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((term: string) => this._searchEntries(term))
    );
  }

  public filterUsers(term: string, user: UserDetail): boolean {
    return RegExp(term).test(String(user.id)) ||
      RegExp(term, 'i').test(user.name) ||
      RegExp(term, 'i').test(user.username);
  }

  private _searchEntries(term: string): void {
    const users = !term ?
      this.service.userList :
      this.service.userList.filter((user: UserDetail) => this.filterUsers(term, user));
    this.service.userList$.next(users);
  }
}
