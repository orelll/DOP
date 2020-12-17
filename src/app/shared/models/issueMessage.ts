import { autoserializeAs } from 'cerializr';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions.component';
import { Column, LogType } from '../decorators/column-decorator';
import { ActionsComponentsEnum } from './actions-components-enum';

export class IssueMessage {
  @Column({ order: 1, name: 'Microservice Name', canSort: true })
  @LogType(String)
  microServiceName: string;

  @Column({ order: 2 })
  @LogType(String)
  UUID: string;

  @Column({ order: 5, name: 'Time Stamp', canSort: true })
  @LogType(Date)
  timeStamp: Date;

  @Column({ order: 3, name: 'Level' })
  @LogType(String)
  level: string;

  @Column({ order: 4, name: 'Message' })
  @LogType(String)
  message: string;

  @Column({ order: 6, name: 'Actions' })
  @LogType(ActionsComponentsEnum.IssuesSearchActionsComponent)
  actions: ActionsComponentsEnum.IssuesSearchActionsComponent;
}
