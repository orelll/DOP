export class IssueMessageResponseDTO {
  public microServiceName: string;
  public UUID: string;
  public timeStamp: Date;
  public level: string;
  public message: string;

  constructor(
    microServiceName: string,
    UUID: string,
    timeStamp: Date,
    level: string,
    message: string
  ) {
    this.microServiceName = microServiceName;
    this.UUID = UUID;
    this.timeStamp = timeStamp;
    this.level = level;
    this.message = message;
  }
}
