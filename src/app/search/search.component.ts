import { Component, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'input-search',
  template: `
      <input #inputSearch
      [(ngModel)]="term" (ngModelChange)="searchModel$.next($event)"
      class="form-control" type="text" placeholder="Search users by id or name or username">
  `,
  styles: ['input { width: 440px; }']
})
export class SearchComponent implements AfterViewInit {
  public searchModel$: Subject<string> = new Subject<string>();
  public searchResults: Array<any>;
  public term: string;

  constructor(private search: SearchService) { }

  ngAfterViewInit() {
    this.search.getSearchResults(this.searchModel$).subscribe(
      (results: any) => this.searchResults = results);
  }
}
