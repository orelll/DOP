import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublishDialogComponent } from './republish-dialog.component';

describe('RepublishDialogComponent', () => {
  let component: RepublishDialogComponent;
  let fixture: ComponentFixture<RepublishDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepublishDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
