import { Component, OnInit } from '@angular/core';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';

@Component({
  selector: 'app-stack-trace-thumbnail',
  templateUrl: './stack-trace-thumbnail.component.html',
  styleUrls: ['./stack-trace-thumbnail.component.css'],
})
export class StackTraceThumbnailComponent implements OnInit {
  constructor(private clipboard: DialogClipboardService) {}

  ngOnInit(): void {}

  getContent(): string {
    return this.clipboard.getClipboard();
  }
}
