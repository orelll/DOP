import { Component, OnInit } from '@angular/core';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';

@Component({
  selector: 'app-unprocessed-search-actions',
  templateUrl: './unprocessed-search-actions.component.html',
  styleUrls: ['./unprocessed-search-actions.component.css'],
})
export class UnprocessedSearchActionsComponent implements OnInit {
  message: UnprocessedMessage;

  constructor() {}

  ngOnInit(): void {}

  republishMessage(): void {
    console.log(`Called republish for ${this.message.id}`);
  }

  archiveMessage(): void {
    console.log(`Called archive for ${this.message.id}`);
  }

  deleteMessage(): void {
    console.log(`Called delete for ${this.message.id}`);
  }
}
