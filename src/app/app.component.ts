import { UsersService, UserDetail } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faTrashAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public page = '1';
  public pageSize = '10';
  public faTrashAlt = faTrashAlt;
  public faUserPlus = faUserPlus;
  public faSearch = faSearch;
  public listUsers: Array<UserDetail>;

  constructor(public service: UsersService, private _modal: NgbModal) { }

  ngOnInit() {
    this.service.getUsers().subscribe(users => this.listUsers = users);
  }

  public openUserModal(content): void {
    this._modal.open(content);
  }

  public deleteUser(id: number): void {
    this.service.deleteUser(id).subscribe();
  }
}
