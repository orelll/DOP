import { autoserializeAs } from 'cerializr';
import { UnprocessedSearchActionsComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions/unprocessed-search-actions.component';
import { Column, LogType } from '../decorators/columnDecorator';

export class UnprocessedMessage {
  @autoserializeAs(String)
  @Column({ name: 'Publisher' })
  @LogType(String)
  public publisher: string;

  @autoserializeAs(String)
  @Column({ name: 'Company' })
  @LogType(String)
  public company: string;

  @autoserializeAs(String)
  @Column({ name: 'Subscriber' })
  @LogType(String)
  public subscriber: string;

  @autoserializeAs(String)
  @Column({ name: 'Resource' })
  @LogType(String)
  public resource: string;

  @autoserializeAs(String)
  @Column({ name: 'Event' })
  @LogType(String)
  public event: string;

  @autoserializeAs(String)
  @Column({ name: 'Error Code' })
  @LogType(String)
  public errorCode: string;

  @autoserializeAs(String)
  @Column({ name: 'Error Message' })
  @LogType(String)
  public errorMessage: string;

  @autoserializeAs(String)
  @Column({ name: 'Error Details' })
  @LogType(String)
  public errorDetails: string;

  @autoserializeAs(String)
  @Column({ name: 'Message' })
  @LogType(String)
  public message: string;

  @autoserializeAs(Number)
  @Column({ name: 'ID' })
  @LogType(Number)
  public id: number;

  @autoserializeAs(UnprocessedSearchActionsComponent)
  @Column({ name: 'Actions' })
  @LogType(UnprocessedSearchActionsComponent)
  public actions: UnprocessedSearchActionsComponent;
}
