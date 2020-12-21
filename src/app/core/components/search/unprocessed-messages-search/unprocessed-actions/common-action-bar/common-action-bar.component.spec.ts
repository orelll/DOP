import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonActionBarComponent } from './common-action-bar.component';

describe('CommonActionBarComponent', () => {
  let component: CommonActionBarComponent;
  let fixture: ComponentFixture<CommonActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
