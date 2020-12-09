import { Component, OnInit } from '@angular/core';
import { UnprocessedMessageResponseDTO } from 'src/app/shared/DTO/unprocessedMessageResponseDTO';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';
import { UnprocessedMessageSearchCriteria } from 'src/app/shared/models/unprosessedMessageSearchCriteria';
import { UnprocessedMessagesService } from 'src/app/shared/services/unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-messages-search',
  templateUrl: './unprocessed-messages-search.component.html',
  styleUrls: ['./unprocessed-messages-search.component.css'],
})
export class UnprocessedMessagesSearchComponent implements OnInit {
  resultsFound: UnprocessedMessageResponseDTO[] = [];

  searchCriteria: UnprocessedMessageSearchCriteria = new UnprocessedMessageSearchCriteria(
    0,
    10
  );

  constructor(private messagesService: UnprocessedMessagesService) {}

  ngOnInit(): void {}

  search(): void {
    this.messagesService.search(this.searchCriteria).subscribe((e) => {
      this.resultsFound = e.map((DTO) => {
        const message = new UnprocessedMessage();
        message.publisher = DTO.publisher;
        message.company = DTO.company;
        message.subscriber = DTO.subscriber;
        message.resource = DTO.resource;
        message.event = DTO.event;
        message.errorCode = DTO.errorCode;
        message.errorMessage = DTO.errorMessage;
        message.errorDetails = DTO.errorDetails;
        message.message = DTO.message;
        message.id = DTO.id;
        return message;
      });
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
