import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tableSymbol } from 'src/app/shared/decorators/column-decorator';
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
  searchForm: FormGroup;

  constructor(
    private messagesService: IssueMessagesService,
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
      pageSize: ['10']
    });
  }

  search(searchData: IssueMessageSearchCriteria): void {
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
    });
  }

  fetchStackTrace(uuid: string): void {
    console.log('called fetchStackTrace');
    const stackTrace = this.messagesService.fetchStackTrace(uuid);
    alert(stackTrace);
  }

  clearInput(propertyName: string): void {
    switch (propertyName) {
      case 'UUID':
        this.searchForm.patchValue({ UUID: '' });
        break;
      case 'message':
        this.searchForm.patchValue({ message: '' });
        break;
      case 'exception':
        this.searchForm.patchValue({ exception: '' });
    }
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
