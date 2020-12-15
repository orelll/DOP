import { autoserializeAs } from 'cerializr';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions.component';
import { Column, LogType } from '../decorators/column-decorator';

export class IssueMessage {
  @autoserializeAs(String)
  @Column({ order: 1, name: 'Microservice Name', canSort: true })
  @LogType(String)
  microServiceName: string;

  @autoserializeAs(String)
  @Column({ order: 2 })
  @LogType(String)
  UUID: string;

  @autoserializeAs(Date)
  @Column({ order: 5, name: 'Time Stamp', canSort: true })
  @LogType(Date)
  timeStamp: Date;

  @autoserializeAs(String)
  @Column({ order: 3, name: 'Level' })
  @LogType(String)
  level: string;

  @autoserializeAs(String)
  @Column({ order: 4, name: 'Message' })
  @LogType(String)
  message: string;

  @autoserializeAs(IssuesSearchActionsComponent)
  @Column({ order: 6, name: 'Actions' })
  @LogType(IssuesSearchActionsComponent)
  actions: IssuesSearchActionsComponent;
}
