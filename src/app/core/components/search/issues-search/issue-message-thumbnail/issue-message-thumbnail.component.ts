import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueMessageResponseDTO } from 'src/app/common/DTO/issueMessageResponseDTO';

@Component({
  selector: 'app-issue-message-thumbnail',
  templateUrl: './issue-message-thumbnail.component.html',
  styleUrls: ['./issue-message-thumbnail.component.css'],
})
export class IssueMessageThumbnailComponent implements OnInit {
  constructor() {}

  @Input() message: IssueMessageResponseDTO;
  @Output() fetchStackTraceEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  fetchStackTrace(): void{
    this.fetchStackTraceEvent.emit(this.message.UUID);
  }
}
