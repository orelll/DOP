import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTraceThumbnailDialogComponent } from './stack-trace-thumbnail-dialog.component';

describe('StackTraceThumbnailComponent', () => {
  let component: StackTraceThumbnailDialogComponent;
  let fixture: ComponentFixture<StackTraceThumbnailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackTraceThumbnailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackTraceThumbnailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
