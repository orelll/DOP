import { TestBed } from '@angular/core/testing';
import { RandomsGenerator } from '../tests-helpers/random-genrators';
import { UnprocessedMessageSearchCriteria } from './unprosessedMessageSearchCriteria';

describe('UnprocessedMessageSearchCriteria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('All data is mapped', () => {
    const page = RandomsGenerator.getRandomInt(10);
    const pageSize = RandomsGenerator.getRandomInt(20);

    const publisher = RandomsGenerator.getRandomInt(100);
    const company = RandomsGenerator.getRandomString(10);
    const subscriber = RandomsGenerator.getRandomInt(150);
    const resource = RandomsGenerator.getRandomString(10);
    const httpCode = RandomsGenerator.getRandomInt(600);

    const sut = new UnprocessedMessageSearchCriteria(
      page,
      pageSize,
      publisher,
      company,
      subscriber,
      resource,
      httpCode
    );

    expect(sut.page).toBe(page);
    expect(sut.pageSize).toBe(pageSize);
    expect(sut.publisher).toBe(publisher);
    expect(sut.company).toBe(company);
    expect(sut.subscriber).toBe(subscriber);
    expect(sut.resource).toBe(resource);
    expect(sut.httpCode).toBe(httpCode);
  });
});
