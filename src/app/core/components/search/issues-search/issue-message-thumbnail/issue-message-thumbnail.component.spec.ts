import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMessageThumbnailComponent } from './issue-message-thumbnail.component';

describe('IssueThumbnailComponent', () => {
  let component: IssueMessageThumbnailComponent;
  let fixture: ComponentFixture<IssueMessageThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueMessageThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueMessageThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
