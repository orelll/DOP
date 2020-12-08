import { MatButton } from '@angular/material/button';
import { autoserializeAs } from 'cerializr';
import { Column, logType } from '../decorators/columnDecorator';

export class IssueMessage {
  @autoserializeAs(String)
  @Column({ order: 1, name: 'Microservice Name' })
  @logType(String)
  public microServiceName: string;

  @autoserializeAs(String)
  @Column({ order: 2 })
  @logType(String)
  UUID: string;

  @autoserializeAs(Date)
  @Column({ order: 5, name: 'Time Stamp'  })
  @logType(Date)
  timeStamp: Date;

  @autoserializeAs(String)
  @Column({ order: 3, name: 'Level' })
  @logType(String)
  level: string;

  @autoserializeAs(String)
  @Column({ order: 4, name: 'Message' })
  @logType(String)
  message: string;

  @autoserializeAs(MatButton)
  @Column({ order: 6, name: 'x' })
  @logType(MatButton)
  actions: MatButton;

  @Column({ order: 7, name: 'x' })
  fetchCallStack(): void {
    console.log('trololoo');
  }
}
