import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTraceThumbnailComponent } from './stack-trace-thumbnail-dialog.component';

describe('StackTraceThumbnailComponent', () => {
  let component: StackTraceThumbnailComponent;
  let fixture: ComponentFixture<StackTraceThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackTraceThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackTraceThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
