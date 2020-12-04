import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnprocessedMessageResponseDTO } from 'src/app/common/DTO/unprocessedMessageResponseDTO';

@Component({
  selector: 'app-unprocessed-message-thumbnail',
  templateUrl: './unprocessed-message-thumbnail.component.html',
  styleUrls: ['./unprocessed-message-thumbnail.component.css'],
})
export class UnprocessedMessageThumbnailComponent implements OnInit {
  @Input() message: UnprocessedMessageResponseDTO;
  @Output() deleteMessageEvent = new EventEmitter<number>();
  @Output() republishMessageEvent = new EventEmitter<number>();
  @Output() archiveMessageEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteMessage(): void {
    this.deleteMessageEvent.emit(this.message.id);
  }

  republishMessage(): void {
    this.republishMessageEvent.emit(this.message.id);
  }

  archiveMessage(): void {
    this.archiveMessageEvent.emit(this.message.id);
  }
}
