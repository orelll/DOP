import { Column, LogType } from '../decorators/column-decorator';
import { ActionsComponentsEnum } from './actions-components-enum';

export class UnprocessedMessage {
  @Column({ name: 'Publisher' })
  @LogType(String)
  public publisher: string;

  @Column({ name: 'Company' })
  @LogType(String)
  public company: string;

  @Column({ name: 'Subscriber' })
  @LogType(String)
  public subscriber: string;

  @Column({ name: 'Resource' })
  @LogType(String)
  public resource: string;

  @Column({ name: 'Event' })
  @LogType(String)
  public event: string;

  @Column({ name: 'Error Code' })
  @LogType(String)
  public errorCode: string;

  @Column({ name: 'Error Message' })
  @LogType(String)
  public errorMessage: string;

  @Column({ name: 'Error Details' })
  @LogType(String)
  public errorDetails: string;

  @Column({ name: 'Message' })
  @LogType(String)
  public message: string;

  @Column({ name: 'ID' })
  @LogType(Number)
  public id: number;

  @Column({ name: 'Actions' })
  @LogType(ActionsComponentsEnum.UnprocessedSearchActionsComponent)
  public actions: ActionsComponentsEnum.UnprocessedSearchActionsComponent ;
}
