import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tableSymbol } from 'src/app/shared/decorators/column-decorator';
import { ErrorsGroup } from 'src/app/shared/models/errorsGroup';
import { TableModel } from 'src/app/shared/models/tableModel';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';
import { UnprocessedMessageSearchCriteria } from 'src/app/shared/models/unprosessedMessageSearchCriteria';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { UnprocessedMessagesService } from 'src/app/shared/services/unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-messages-search',
  templateUrl: './unprocessed-messages-search.component.html',
  styleUrls: ['./unprocessed-messages-search.component.css'],
})
export class UnprocessedMessagesSearchComponent implements OnInit {
  resultsFound: UnprocessedMessage[] = [];
  tableSchema: TableModel;
  searchForm: FormGroup;
  httpErrorCodes: ErrorsGroup[] = [
   ErrorsGroup.get4xxGroup(),
   ErrorsGroup.get5xxGroup()
  ];

  constructor(
    private messagesService: UnprocessedMessagesService,
    public spinnerService: SpinnerService,
    private fb: FormBuilder
  ) {
    this.prepareSearchForm();
  }

  prepareSearchForm(): void {
    this.searchForm = this.fb.group({
      publisher: [''],
      company: [''],
      subscriber: [''],
      resource: [''],
      httpCode: [''],
      page: ['1'],
      pageSize: ['10'],
    });
  }

  ngOnInit(): void {
    this.tableSchema = new UnprocessedMessage()[tableSymbol];
  }

  search(searchCriteria: UnprocessedMessageSearchCriteria): void {
    this.spinnerService.setBusy(true);

    this.messagesService.search(searchCriteria).subscribe((e) => {
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
      this.spinnerService.setBusy(false);
    });
  }
  clearInput(propertyName: string): void {
    switch (propertyName) {
      case 'publisher':
        this.searchForm.patchValue({ publisher: '' });
        break;
      case 'company':
        this.searchForm.patchValue({ company: '' });
        break;
      case 'subscriber':
        this.searchForm.patchValue({ subscriber: '' });
        break;
      case 'resource':
        this.searchForm.patchValue({ resource: '' });
        break;
      case 'httpCode':
        this.searchForm.patchValue({ httpCode: '' });
        break;
    }
  }

  onSubmit(): void {
    const searchCriteria = new UnprocessedMessageSearchCriteria(
      this.searchForm.value.page,
      this.searchForm.value.pageSize,
      this.searchForm.value.publisher,
      this.searchForm.value.company,
      this.searchForm.value.subscriber,
      this.searchForm.value.resource,
      this.searchForm.value.httpCode
    );
    console.log(
      `Calling search with values: ${JSON.stringify(searchCriteria)}`
    );
    this.search(searchCriteria);
  }
}
