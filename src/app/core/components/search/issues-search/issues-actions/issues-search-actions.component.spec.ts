import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesSearchActionsComponent } from './issues-search-actions.component';

describe('IssuesSearchActionsComponent', () => {
  let component: IssuesSearchActionsComponent;
  let fixture: ComponentFixture<IssuesSearchActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesSearchActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
