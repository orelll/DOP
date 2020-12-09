import { Component, OnInit } from '@angular/core';
import { IssueMessage } from 'src/app/shared/models/issueMessage';

@Component({
  selector: 'app-issues-search-actions',
  templateUrl: './issues-search-actions.component.html',
  styleUrls: ['./issues-search-actions.component.css'],
})
export class IssuesSearchActionsComponent implements OnInit {
  message: IssueMessage;

  constructor() {}

  ngOnInit(): void {}

  fetchStackTrace(): void {
    console.log(`Called for ${this.message.UUID}`);
  }
}
