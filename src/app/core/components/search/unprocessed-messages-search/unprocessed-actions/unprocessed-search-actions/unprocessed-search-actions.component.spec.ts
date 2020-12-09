import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedSearchActionsComponent } from './unprocessed-search-actions.component';

describe('UnprocessedSearchActionsComponent', () => {
  let component: UnprocessedSearchActionsComponent;
  let fixture: ComponentFixture<UnprocessedSearchActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessedSearchActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedSearchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
