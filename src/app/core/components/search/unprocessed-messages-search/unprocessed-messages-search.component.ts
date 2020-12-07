import { Component, OnInit } from '@angular/core';
import { UnprocessedMessageResponseDTO } from 'src/app/shared/DTO/unprocessedMessageResponseDTO';
import { UnprocessedMessageSearchCriteria } from 'src/app/shared/models/unprosessedMessageSearchCriteria';
import { UnprocessedMessagesService } from 'src/app/shared/services/unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-messages-search',
  templateUrl: './unprocessed-messages-search.component.html',
  styleUrls: ['./unprocessed-messages-search.component.css'],
})
export class UnprocessedMessagesSearchComponent implements OnInit {

  resultsFound: UnprocessedMessageResponseDTO[] = [];
  pageSize = 10;
  pageNumber = 10;

  searchCriteria: UnprocessedMessageSearchCriteria = new UnprocessedMessageSearchCriteria(0, 10);

  constructor(private messagesService: UnprocessedMessagesService) {}

  ngOnInit(): void {}

  doSearch(): void {
    this.messagesService.search(0, 10).subscribe(results => {
      console.log(`Gathered ${results.length} elements during search`);
      this.resultsFound = results;
    });
  }

  deleteMessage(messageId: number): void {
    console.log('called deleteMessage');
    this.messagesService.deleteMessage(messageId);
  }

  republishMessage(messageId: number): void {
    console.log('called republishMessage');
    this.messagesService.republishMessage(messageId);
  }

  archiveMessage(messageId: number): void {
    console.log('called archiveMessage');
    this.messagesService.archiveMessage(messageId);
  }
}
