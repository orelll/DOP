import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
});
