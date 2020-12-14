import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http-service';
import { UnprocessedMessagesService } from 'src/app/shared/services';

import { UnprocessedMessagesSearchComponent } from './unprocessed-messages-search.component';

describe('UnprocessedMessagesSearchComponent', () => {
  let component: UnprocessedMessagesSearchComponent;
  let fixture: ComponentFixture<UnprocessedMessagesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnprocessedMessagesSearchComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        UnprocessedMessagesService,
        FormBuilder,
        HttpService,
        HttpClient,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain search form', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('form');

    expect(elemToCheck.className).toContain('search-form');
  });

  it('should contain publisher input', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('#publisher');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain company input', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('#company');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain subscriber input', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('#subscriber');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain resource input', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('#resource');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain http code input', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('#httpCode');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain search button', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('button[type=submit]');

    expect(elemToCheck).not.toBe(null);
  });

  it('should contain results table', () => {
    const fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const elemToCheck = compiled.querySelector('app-table');

    expect(elemToCheck).not.toBe(null);
  });
});
