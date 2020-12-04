import { Component, OnInit } from '@angular/core';
import { IssueMessageResponseDTO } from 'src/app/shared/DTO/issueMessageResponseDTO';
import { IssueMessageSearchCriteria } from 'src/app/shared/entities/issueMessageSearchCriteria';
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

  resultsFound: IssueMessageResponseDTO[] = [];

  constructor(private messagesService: IssueMessagesService) {}

  ngOnInit(): void {}

  search(): void {
    this.messagesService.search(this.searchCriteria).subscribe((results) => {
      console.log(`gathered ${results.length} elements during search`);
      this.resultsFound = results;
    });
  }

  fetchStackTrace(uuid: string): void {
    console.log('called fetchStackTrace');
    const stackTrace = this.messagesService.fetchStackTrace(uuid);
    alert(stackTrace);
  }
}
