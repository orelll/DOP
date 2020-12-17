import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tableSymbol } from 'src/app/shared/decorators/column-decorator';
import { IssueMessage } from 'src/app/shared/models/issueMessage';
import { IssueMessageSearchCriteria } from 'src/app/shared/models/issueMessageSearchCriteria';
import { TableModel } from 'src/app/shared/models/tableModel';
import { IssueMessagesService } from 'src/app/core/components/search/issues-search/issues-actions/issue-messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-issues-search',
  templateUrl: './issues-search.component.html',
  styleUrls: ['./issues-search.component.css'],
})
export class IssuesSearchComponent implements OnInit {
  searchCriteria: IssueMessageSearchCriteria;
  resultsFound: IssueMessage[];
  tableSchema: TableModel;
  searchForm: FormGroup;
  controlName: typeof ControlNameEnum = ControlNameEnum;

  constructor(
    private messagesService: IssueMessagesService,
    public spinnerService: SpinnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.prepareSearchForm();
    this.tableSchema = new IssueMessage()[tableSymbol];
  }

  prepareSearchForm(): void {
    this.searchForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      UUID: [''],
      message: [''],
      exception: [''],
      page: ['1'],
      pageSize: ['10'],
    });
  }

  search(searchData: IssueMessageSearchCriteria): void {
    this.spinnerService.setBusy(true);
    this.messagesService.search(searchData).subscribe((e) => {
      this.resultsFound = e.map((DTO) => {
        const message = new IssueMessage();
        message.UUID = DTO.UUID;
        message.level = DTO.level;
        message.message = DTO.message;
        message.microServiceName = DTO.microServiceName;
        message.timeStamp = DTO.timeStamp;
        return message;
      });
      this.spinnerService.setBusy(false);
    });
  }

  fetchStackTrace(uuid: string): void {
    console.log('called fetchStackTrace');
    const stackTrace = this.messagesService.fetchStackTrace(uuid);
    alert(stackTrace);
  }

  clearInput(propertyName: ControlNameEnum): void {
    switch (propertyName) {
      case ControlNameEnum.page:
        this.searchForm.patchValue({ page: '' });
        break;
      case ControlNameEnum.pageSize:
        this.searchForm.patchValue({ pageSize: '' });
        break;
      case ControlNameEnum.startDate:
        this.searchForm.patchValue({ startDate: '' });
        break;
      case ControlNameEnum.endDate:
        this.searchForm.patchValue({ endDate: '' });
        break;
      case ControlNameEnum.UUID:
        this.searchForm.patchValue({ UUID: '' });
        break;
      case ControlNameEnum.message:
        this.searchForm.patchValue({ message: '' });
        break;
      case ControlNameEnum.exception:
        this.searchForm.patchValue({ message: '' });
        break;
    }
  }

  externalSearchCall(event: any): void {
    this.onSubmit();
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
    const searchCriteria = new IssueMessageSearchCriteria(
      this.searchForm.value.page,
      this.searchForm.value.pageSize,
      this.searchForm.value.startDate,
      this.searchForm.value.endDate,
      this.searchForm.value.UUID,
      this.searchForm.value.message,
      this.searchForm.value.exception
    );

    this.search(searchCriteria);
  }
}

enum ControlNameEnum {
  page,
  pageSize,
  startDate,
  endDate,
  UUID,
  message,
  exception,
}
