import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http-service';
import { UnprocessedMessageResponseDTO } from 'src/app/shared/DTO/unprocessedMessageResponseDTO';
import { UnprocessedMessageSearchCriteria } from 'src/app/shared/models/unprosessedMessageSearchCriteria';
import { UnprocessedMessagesService } from 'src/app/shared/services';
import { RandomsGenerator } from 'src/app/shared/tests-helpers/random-generators';
import { HttpServiceMock } from 'src/app/shared/tests-helpers/services-mocks';

import { UnprocessedMessagesSearchComponent } from './unprocessed-messages-search.component';

describe('UnprocessedMessagesSearchComponent', () => {
  let component: UnprocessedMessagesSearchComponent;
  let fixture: ComponentFixture<UnprocessedMessagesSearchComponent>;
  let searchService: UnprocessedMessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnprocessedMessagesSearchComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        UnprocessedMessagesService,
        FormBuilder,
        HttpService,
        { provide: HttpClient, useValue: HttpServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedMessagesSearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(UnprocessedMessagesService);
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
  it('search button calls UnprocessedMessagesService.Search method', () => {
    spyOn(searchService, 'search');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(searchService.search).toHaveBeenCalled();
  });

  it('search method maps all required data in form', () => {
    spyOn(searchService, 'search');
    const searchCritteria = getSearchCriteria();

    component.searchForm.patchValue({
      publisher: searchCritteria.publisher,
      company: searchCritteria.company,
      subscriber: searchCritteria.subscriber,
      resource: searchCritteria.resource,
      httpCode: searchCritteria.httpCode,
      page: searchCritteria.page,
      pageSize: searchCritteria.pageSize,
    });

    fixture.detectChanges();

    expect(component.searchForm.controls['publisher'].value).toBe(
      searchCritteria.publisher
    );
    expect(component.searchForm.controls['company'].value).toBe(
      searchCritteria.company
    );
    expect(component.searchForm.controls['subscriber'].value).toBe(
      searchCritteria.subscriber
    );
    expect(component.searchForm.controls['resource'].value).toBe(
      searchCritteria.resource
    );
    expect(component.searchForm.controls['httpCode'].value).toBe(
      searchCritteria.httpCode
    );
    expect(component.searchForm.controls['page'].value).toBe(
      searchCritteria.page
    );
    expect(component.searchForm.controls['pageSize'].value).toBe(
      searchCritteria.pageSize
    );
  });

  it('search method maps all required data in UI', () => {
    spyOn(searchService, 'search');
    const searchCriteria = getSearchCriteria();

    component.searchForm.patchValue({
      publisher: searchCriteria.publisher,
      company: searchCriteria.company,
      subscriber: searchCriteria.subscriber,
      resource: searchCriteria.resource,
      httpCode: searchCriteria.httpCode,
      page: searchCriteria.page,
      pageSize: searchCriteria.pageSize,
    });

    fixture.detectChanges();

    var page = fixture.nativeElement;

    expect(queryForValue(page, '#publisher')).toBe(
      searchCriteria.publisher.toString()
    );
    expect(queryForValue(page, '#company')).toBe(searchCriteria.company);
    expect(queryForValue(page, '#subscriber')).toContain(
      searchCriteria.subscriber
    );
    expect(queryForValue(page, '#resource')).toContain(searchCriteria.resource);
    expect(queryForValue(page, '#httpCode')).toBe(
      searchCriteria.httpCode.toString()
    );

    expect(queryForValue(page, '#page')).toBe(searchCriteria.page.toString());
    expect(queryForValue(page, '#pageSize')).toBe(
      searchCriteria.pageSize.toString()
    );
  });

  it('submit calls search service with mapped data', () => {
    spyOn(searchService, 'search').and.returnValue(
      new Observable<UnprocessedMessageResponseDTO[]>()
    );

    const searchCriteria = getSearchCriteria();

    component.searchForm.patchValue({
      publisher: searchCriteria.publisher,
      company: searchCriteria.company,
      subscriber: searchCriteria.subscriber,
      resource: searchCriteria.resource,
      httpCode: searchCriteria.httpCode,
      page: searchCriteria.page,
      pageSize: searchCriteria.pageSize,
    });

    fixture.detectChanges();

    component.onSubmit();

    expect(searchService.search).toHaveBeenCalledOnceWith(searchCriteria);
  });

  it('data returned from search service is mapped properly', () => {
    var dtoArray = [generateIssueMessageResponseDTO()];
    var mockedResults = of<UnprocessedMessageResponseDTO[]>(dtoArray);
    spyOn(searchService, 'search').and.returnValue(mockedResults);

    const searchCriteria = getSearchCriteria();

    component.searchForm.patchValue({
      publisher: searchCriteria.publisher,
      company: searchCriteria.company,
      subscriber: searchCriteria.subscriber,
      resource: searchCriteria.resource,
      httpCode: searchCriteria.httpCode,
      page: searchCriteria.page,
      pageSize: searchCriteria.pageSize,
    });

    fixture.detectChanges();

    component.onSubmit();

    var expectedDTO = dtoArray[0];
    expect(component.resultsFound[0].publisher).toBe(expectedDTO.publisher);
    expect(component.resultsFound[0].company).toBe(expectedDTO.company);
    expect(component.resultsFound[0].subscriber).toBe(expectedDTO.subscriber);
    expect(component.resultsFound[0].resource).toBe(expectedDTO.resource);
    expect(component.resultsFound[0].event).toBe(expectedDTO.event);
    expect(component.resultsFound[0].errorCode).toBe(expectedDTO.errorCode);
    expect(component.resultsFound[0].errorMessage).toBe(
      expectedDTO.errorMessage
    );
    expect(component.resultsFound[0].errorDetails).toBe(
      expectedDTO.errorDetails
    );
    expect(component.resultsFound[0].message).toBe(expectedDTO.message);
    expect(component.resultsFound[0].id).toBe(expectedDTO.id);
  });
});

function queryForValue(nativeElement, selector: string): any {
  const value = nativeElement.querySelector(selector)?.value;
  return value;
}

function getSearchCriteria(): UnprocessedMessageSearchCriteria {
  const page = RandomsGenerator.getRandomInt(10);
  const pageSize = RandomsGenerator.getRandomInt(30);
  const publisher = RandomsGenerator.getRandomInt(10);
  const company = RandomsGenerator.getRandomString(10);
  const subscriber = RandomsGenerator.getRandomInt(10);
  const resource = RandomsGenerator.getRandomString(10);

  const httpCode = RandomsGenerator.getRandomInt(10);

  const expectedCriteria = new UnprocessedMessageSearchCriteria(
    page,
    pageSize,
    publisher,
    company,
    subscriber,
    resource,
    httpCode
  );

  return expectedCriteria;
}

function generateIssueMessageResponseDTO(): UnprocessedMessageResponseDTO {
  const microServiceName = RandomsGenerator.getRandomString(10);

  const publisher = RandomsGenerator.getRandomString(10);
  const company = RandomsGenerator.getRandomString(10);
  const subscriber = RandomsGenerator.getRandomString(10);
  const resource = RandomsGenerator.getRandomString(10);
  const event = RandomsGenerator.getRandomString(10);
  const errorCode = RandomsGenerator.getRandomString(10);
  const errorMessage = RandomsGenerator.getRandomString(10);
  const errorDetails = RandomsGenerator.getRandomString(10);
  const message = RandomsGenerator.getRandomString(10);
  const id = RandomsGenerator.getRandomInt(100);

  var newDTO = new UnprocessedMessageResponseDTO(
    publisher,
    company,
    subscriber,
    resource,
    event,
    errorCode,
    errorMessage,
    errorDetails,
    message,
    id
  );
  return newDTO;
}
