import { Component, OnInit } from '@angular/core';
import { UnprocessedMessageResponseDTO } from 'src/app/common/DTO/unprocessedMessageResponseDTO';
import { UnprocessedMessageSearch as UnprocessedMessageSearchCriteria } from 'src/app/common/entities/unprosessedMessageSearchCriteria';
import { UnprocessedMessagesService } from 'src/app/common/services/unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-messages-search',
  templateUrl: './unprocessed-messages-search.component.html',
  styleUrls: ['./unprocessed-messages-search.component.css'],
})
export class UnprocessedMessagesSearchComponent implements OnInit {

  elementsFound: UnprocessedMessageResponseDTO[] = [];
  pageSize = 10;
  pageNumber = 10;

  searchCriteria: UnprocessedMessageSearchCriteria = new UnprocessedMessageSearchCriteria(0, 10);

  constructor(private messagesService: UnprocessedMessagesService) {}

  ngOnInit(): void {}

  doSearch(): void {
    this.messagesService.search(0, 10);
  }

  deleteMessage(messageId: number): void {
    this.messagesService.deleteMessage(messageId);
  }

  republishMessage(messageId: number): void {
    this.messagesService.republishMessage(messageId);
  }

  archiveMessage(messageId: number): void {
    this.messagesService.archiveMessage(messageId);
  }
}
