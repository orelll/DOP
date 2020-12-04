export class IssueMessageSearchCriteria {
  page: number;
  pageSize: number;
  startDate?: Date;
  endDate?: Date;
  UUID?: string;
  message?: string;
  exception?: string;

  constructor(
    page: number,
    pageSize: number,
    startDate: Date = null,
    endDate: Date = null,
    UUID: string = null,
    message: string = null,
    exception: string = null
  ) {
    this.pageSize = pageSize;
    this.page = page;
    this.startDate = startDate;
    this.endDate = endDate;
    this.UUID = UUID;
    this.message = message;
    this.exception = exception;
  }
}
