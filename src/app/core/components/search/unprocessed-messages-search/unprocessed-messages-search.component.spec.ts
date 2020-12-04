import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedMessagesSearchComponent } from './unprocessed-messages-search.component';

describe('UnprocessedMessagesSearchComponent', () => {
  let component: UnprocessedMessagesSearchComponent;
  let fixture: ComponentFixture<UnprocessedMessagesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessedMessagesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
