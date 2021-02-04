import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from "./search/search.component";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModalModule.forRoot(),
        HttpClientTestingModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        UserFormComponent,
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should contain a title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
  });

  it('should render Users title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Users');
  });

  it('should call open modal method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'openUserModal');
    const openModalBtn = fixture.debugElement.query(By.css('.btn-primary'));
    openModalBtn.triggerEventHandler('click', null);
    expect(component.openUserModal).toHaveBeenCalled();
  });
});
