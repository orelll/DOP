import { Component, OnInit } from '@angular/core';
import { tableSymbol } from 'src/app/shared/decorators/columnDecorator';
import { IssueMessage } from 'src/app/shared/models/issueMessage';
import { IssueMessageSearchCriteria } from 'src/app/shared/models/issueMessageSearchCriteria';
import { TableModel } from 'src/app/shared/models/tableModel';
import { IssueMessagesService } from 'src/app/shared/services/issue-messages.service';

@Component({
  selector: 'app-issues-search',
  templateUrl: './issues-search.component.html',
  styleUrls: ['./issues-search.component.css'],
})
export class IssuesSearchComponent implements OnInit {
  searchCriteria: IssueMessageSearchCriteria = new IssueMessageSearchCriteria(
    0,
    10
  );

  resultsFound: IssueMessage[];
  tableSchema: TableModel;

  constructor(private messagesService: IssueMessagesService) {}

  ngOnInit(): void {
    this.tableSchema = new IssueMessage()[tableSymbol];
  }

  search(): void {
    this.messagesService.search(this.searchCriteria).subscribe((e) => {
      this.resultsFound = e.map((DTO) => {
        const message = new IssueMessage();
        message.UUID = DTO.UUID;
        message.level = DTO.level;
        message.message = DTO.message;
        message.microServiceName = DTO.microServiceName;
        message.timeStamp = DTO.timeStamp;
        return message;
      });
    });
  }

  fetchStackTrace(uuid: string): void {
    console.log('called fetchStackTrace');
    const stackTrace = this.messagesService.fetchStackTrace(uuid);
    alert(stackTrace);
  }
}
