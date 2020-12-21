import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnprocessedActionCheckComponent } from './unprocessed-action-check.component';


describe('CheckComponentComponent', () => {
  let component: UnprocessedActionCheckComponent;
  let fixture: ComponentFixture<UnprocessedActionCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessedActionCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedActionCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
