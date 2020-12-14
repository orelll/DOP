import { TestBed } from '@angular/core/testing';
import { RandomsGenerator } from '../tests-helpers/random-genrators';
import { IssueMessageSearchCriteria } from './issueMessageSearchCriteria';

describe('IssueMessageSearchCriteria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('All data is mapped', () => {
    const page = RandomsGenerator.getRandomInt(10);
    const pageSize = RandomsGenerator.getRandomInt(30);
    const startDate = new Date();
    startDate.setDate(Date.now());

    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 3);

    const uuid = RandomsGenerator.getRandomString(10);
    const message = RandomsGenerator.getRandomString(15);
    const exception = RandomsGenerator.getRandomString(30);

    const sut = new IssueMessageSearchCriteria(
      page,
      pageSize,
      startDate,
      endDate,
      uuid,
      message,
      exception
    );

    expect(sut.page).toBe(page);
    expect(sut.pageSize).toBe(pageSize);
    expect(sut.startDate).toBe(startDate);
    expect(sut.endDate).toBe(endDate);
    expect(sut.UUID).toBe(uuid);
    expect(sut.message).toBe(message);
    expect(sut.exception).toBe(exception);
  });
});
