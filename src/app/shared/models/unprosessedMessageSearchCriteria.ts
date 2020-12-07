
export class UnprocessedMessageSearchCriteria {
  public page: number;
  public pageSize: number;
  public publisher: number;
  public company: string;
  public subscriber: number;
  public resource: string;
  public httpCode: number;

  constructor(
    page: number,
    pageSize: number,
    publisher: number = null,
    company: string = null,
    subscriber: number = null,
    resource: string = null,
    httpCode: number = null
  ) {
    this.publisher = publisher === undefined ? null : publisher;
    this.company = company === undefined ? '' : company;
    this.subscriber = subscriber === undefined ? null : subscriber;
    this.resource = resource === undefined ? '' : resource;
    this.httpCode = httpCode === undefined ? null : httpCode;
  }
}
