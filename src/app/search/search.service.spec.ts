import { USERS } from './../services/users.service.spec';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { UsersService } from '../services/users.service';
import { of } from "rxjs";

describe('SearchService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    usersService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('should return a user with id 1', fakeAsync(() => {
    const userList = USERS;
    spyOn(usersService, 'getUsers').and.returnValue(of(userList));
    const service: SearchService = TestBed.get(SearchService);
    tick();
    const res = service.filterUsers('1', USERS[0]);
    expect(res).toBeTruthy();
  }));

  it('should return a user with id 30', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.filterUsers('30', USERS[0])).toBeFalsy();
  });

  it('should return a user with name Leanne', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.filterUsers('Leanne', USERS[0])).toBeTruthy();
  });

  it('should return a user with username Jessica', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.filterUsers('Jessica', USERS[0])).toBeFalsy();
  });


});