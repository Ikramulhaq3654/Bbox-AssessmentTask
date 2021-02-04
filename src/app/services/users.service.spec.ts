import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

export const NEW_USER = {
  id: 10,
  name: "Clementina DuBuque",
  username: "Moriah.Stanton",
  email: "Rey.Padberg@karina.biz",
  address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232"
    }
  },
  phone: "024-648-3804",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }
}

export const USERS = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1 - 770 - 736 - 8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010 - 692 - 6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590 - 4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1 - 463 - 123 - 4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  }
];

describe('UsersService', () => {
  let usersService: UsersService;
  let htttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService);
    htttpTestingController = TestBed.get(HttpTestingController);
  });

  it('UsersService should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('should get users list', () => {
    usersService.getUsers().subscribe(usersList => {
      expect(usersList).toBeTruthy();
      expect(usersService.userList).toEqual(USERS);
    });

    const reqCal = htttpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    expect(reqCal.request.method).toEqual('GET');

    reqCal.flush(USERS);
  });

  it('should add user in the list', () => {
    usersService.addUser(NEW_USER).subscribe(usersList => {
      expect(usersList.length).toBe(4);
    });

    const reqCal = htttpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    expect(reqCal.request.method).toEqual('POST');
    USERS.push(NEW_USER);
    reqCal.flush(USERS);
  });


  it('should delete user from the list', () => {
    usersService.deleteUser(1).subscribe(usersList => {
      expect(usersList.length).toBe(3);
    });

    const reqCal = htttpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');

    expect(reqCal.request.method).toEqual('DELETE');

    reqCal.flush(USERS.slice(1));
  });


  afterEach(() => {
    htttpTestingController.verify();
  });

});
