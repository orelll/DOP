import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesSearchComponent } from './issues-search.component';

describe('IssuesSearchComponent', () => {
  let component: IssuesSearchComponent;
  let fixture: ComponentFixture<IssuesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesSearchComponent ]
    })
    .compileComponents();
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
