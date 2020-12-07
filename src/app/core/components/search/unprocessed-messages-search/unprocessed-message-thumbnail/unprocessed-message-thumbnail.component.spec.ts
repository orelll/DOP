import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedMessageThumbnailComponent } from './unprocessed-message-thumbnail.component';

describe('UnprocessedMessageThumbnailComponent', () => {
  let component: UnprocessedMessageThumbnailComponent;
  let fixture: ComponentFixture<UnprocessedMessageThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessedMessageThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedMessageThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
