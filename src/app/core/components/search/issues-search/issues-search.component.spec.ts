import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessageSearchCriteria } from 'src/app/shared/models/issueMessageSearchCriteria';
import { IssueMessagesService } from 'src/app/shared/services';
import { RandomsGenerator } from 'src/app/shared/tests-helpers/random-generators';
import { HttpServiceMock } from 'src/app/shared/tests-helpers/services-mocks';
import { from, Observable, of } from 'rxjs';

import { IssuesSearchComponent } from './issues-search.component';
import { IssueMessageResponseDTO } from 'src/app/shared/DTO/issueMessageResponseDTO';
import { timestamp } from 'rxjs/internal/operators';

describe('IssuesSearchComponent', () => {
  let component: IssuesSearchComponent;
  let searchService: IssueMessagesService;
  let fixture: ComponentFixture<IssuesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesSearchComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        IssueMessagesService,
        HttpService,
        FormBuilder,
        { provide: HttpClient, useValue: HttpServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(IssueMessagesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search button calls IssueMessagesService.Search method', () => {
    spyOn(searchService, 'search');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(searchService.search).toHaveBeenCalled();
  });

  it('search method maps all required data in form', () => {
    spyOn(searchService, 'search');
    const searchCritteria = getSearchCriteria();

    component.searchForm.patchValue({
      startDate: searchCritteria.startDate,
      endDate: searchCritteria.endDate,
      UUID: searchCritteria.UUID,
      message: searchCritteria.message,
      exception: searchCritteria.exception,
      page: searchCritteria.page,
      pageSize: searchCritteria.pageSize,
    });

    fixture.detectChanges();

    expect(component.searchForm.controls['startDate'].value).toBe(
      searchCritteria.startDate
    );
    expect(component.searchForm.controls['endDate'].value).toBe(
      searchCritteria.endDate
    );
    expect(component.searchForm.controls['UUID'].value).toBe(
      searchCritteria.UUID
    );
    expect(component.searchForm.controls['message'].value).toBe(
      searchCritteria.message
    );
    expect(component.searchForm.controls['exception'].value).toBe(
      searchCritteria.exception
    );
    expect(component.searchForm.controls['page'].value).toBe(
      searchCritteria.page
    );
    expect(component.searchForm.controls['pageSize'].value).toBe(
      searchCritteria.pageSize
    );
    // expect(searchService.search).toHaveBeenCalledOnceWith(expectedCriteria);
  });

  it('search method maps all required data in UI', () => {
    spyOn(searchService, 'search');
    const searchCritteria = getSearchCriteria();

    component.searchForm.patchValue({
      startDate: searchCritteria.startDate,
      endDate: searchCritteria.endDate,
      UUID: searchCritteria.UUID,
      message: searchCritteria.message,
      exception: searchCritteria.exception,
      page: searchCritteria.page,
      pageSize: searchCritteria.pageSize,
    });

    fixture.detectChanges();

    var page = fixture.nativeElement;

    expect(queryForValue(page, '#UUID')).toBe(searchCritteria.UUID);
    expect(queryForValue(page, '#message')).toBe(searchCritteria.message);
    expect(queryForValue(page, '#startDate')).toContain(
      searchCritteria.startDate.toDateString()
    );
    expect(queryForValue(page, '#endDate')).toContain(
      searchCritteria.endDate.toDateString()
    );
    expect(queryForValue(page, '#exception')).toBe(searchCritteria.exception);

    expect(queryForValue(page, '#page')).toBe(searchCritteria.page.toString());
    expect(queryForValue(page, '#pageSize')).toBe(
      searchCritteria.pageSize.toString()
    );
    // expect(searchService.search).toHaveBeenCalledOnceWith(expectedCriteria);
  });

  it('submit calls search service with mapped data', () => {
    spyOn(searchService, 'search').and.returnValue(
      new Observable<IssueMessageResponseDTO[]>()
    );

    const searchCriteria = getSearchCriteria();

    component.searchForm.patchValue({
      startDate: searchCriteria.startDate,
      endDate: searchCriteria.endDate,
      UUID: searchCriteria.UUID,
      message: searchCriteria.message,
      exception: searchCriteria.exception,
      page: searchCriteria.page,
      pageSize: searchCriteria.pageSize,
    });

    fixture.detectChanges();

    component.onSubmit();

    expect(searchService.search).toHaveBeenCalledOnceWith(searchCriteria);
  });

  it('data returned from search service is mapped properly', () => {
    var dtoArray = [generateIssueMessageResponseDTO()];
    var mockedResults = of<IssueMessageResponseDTO[]>(dtoArray);
    spyOn(searchService, 'search').and.returnValue(mockedResults);

    const searchCriteria = getSearchCriteria();

    component.searchForm.patchValue({
      startDate: searchCriteria.startDate,
      endDate: searchCriteria.endDate,
      UUID: searchCriteria.UUID,
      message: searchCriteria.message,
      exception: searchCriteria.exception,
      page: searchCriteria.page,
      pageSize: searchCriteria.pageSize,
    });

    fixture.detectChanges();

    component.onSubmit();

    var expectedDTO = dtoArray[0];
    expect(component.resultsFound[0].UUID).toBe(expectedDTO.UUID);
    expect(component.resultsFound[0].level).toBe(expectedDTO.level);
    expect(component.resultsFound[0].message).toBe(expectedDTO.message);
    expect(component.resultsFound[0].microServiceName).toBe(
      expectedDTO.microServiceName
    );
    expect(component.resultsFound[0].timeStamp).toBe(expectedDTO.timeStamp);
  });
});

function queryForValue(nativeElement, selector: string): any {
  const value = nativeElement.querySelector(selector)?.value;
  return value;
}

function getSearchCriteria(): IssueMessageSearchCriteria {
  const page = RandomsGenerator.getRandomInt(10);
  const pageSize = RandomsGenerator.getRandomInt(30);
  const startDate = RandomsGenerator.randomDate();

  const endDate = RandomsGenerator.randomDate();

  const uuid = RandomsGenerator.getRandomString(10);
  const message = RandomsGenerator.getRandomString(15);
  const exception = RandomsGenerator.getRandomString(30);

  const expectedCriteria = new IssueMessageSearchCriteria(
    page,
    pageSize,
    startDate,
    endDate,
    uuid,
    message,
    exception
  );

  return expectedCriteria;
}

function generateIssueMessageResponseDTO(): IssueMessageResponseDTO {
  const microServiceName = RandomsGenerator.getRandomString(10);
  const UUID = RandomsGenerator.getRandomString(10);
  const timeStamp = RandomsGenerator.randomDate();
  const level = RandomsGenerator.getRandomString(10);
  const message = RandomsGenerator.getRandomString(10);

  var newDTO = new IssueMessageResponseDTO(
    microServiceName,
    UUID,
    timeStamp,
    level,
    message
  );
  return newDTO;
}
