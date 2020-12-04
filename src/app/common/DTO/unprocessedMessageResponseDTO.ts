export class UnprocessedMessageResponseDTO {
  public publisher: string;
  public company: string;
  public subscriber: string;
  public resource: string;
  public event: string;
  public errorCode: string;
  public errorMessage: string;
  public errorDetails: string;
  public message: string;
  public id: number;

  constructor(
    publisher: string,
    company: string,
    subscriber: string,
    resource: string,
    event: string,
    errorCode: string,
    errorMessage: string,
    errorDetails: string,
    message: string,
    id: number
  ) {
    this.publisher = publisher;
    this.company = company;
    this.subscriber = subscriber;
    this.resource = resource;
    this.event = event;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.errorDetails = errorDetails;
    this.message = message;
    this.id = id;
  }
}
