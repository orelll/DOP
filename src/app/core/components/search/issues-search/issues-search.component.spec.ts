import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessagesService } from 'src/app/shared/services';

import { IssuesSearchComponent } from './issues-search.component';

describe('IssuesSearchComponent', () => {
  let component: IssuesSearchComponent;
  let fixture: ComponentFixture<IssuesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesSearchComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [IssueMessagesService, HttpClient, HttpService, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
