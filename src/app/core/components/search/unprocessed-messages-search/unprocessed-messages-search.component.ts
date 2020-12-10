import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from 'src/app/shared/components/dialogs/yes-no/yes-no-dialog.component';
import { tableSymbol } from 'src/app/shared/decorators/columnDecorator';
import { UnprocessedMessageResponseDTO } from 'src/app/shared/DTO/unprocessedMessageResponseDTO';
import { TableModel } from 'src/app/shared/models/tableModel';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';
import { UnprocessedMessageSearchCriteria } from 'src/app/shared/models/unprosessedMessageSearchCriteria';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { UnprocessedMessagesService } from 'src/app/shared/services/unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-messages-search',
  templateUrl: './unprocessed-messages-search.component.html',
  styleUrls: ['./unprocessed-messages-search.component.css'],
})
export class UnprocessedMessagesSearchComponent implements OnInit {
  resultsFound: UnprocessedMessage[] = [];
  tableSchema: TableModel;

  searchCriteria: UnprocessedMessageSearchCriteria = new UnprocessedMessageSearchCriteria(
    0,
    10
  );

  constructor(
    private messagesService: UnprocessedMessagesService
  ) {}

  ngOnInit(): void {
    this.tableSchema = new UnprocessedMessage()[tableSymbol];
  }

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

}
