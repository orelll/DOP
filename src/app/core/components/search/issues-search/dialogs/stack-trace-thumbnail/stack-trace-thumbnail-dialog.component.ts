import { Component, OnInit } from '@angular/core';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';

@Component({
  selector: 'app-stack-trace-thumbnail-dialog',
  templateUrl: './stack-trace-thumbnail-dialog.component.html',
  styleUrls: ['./stack-trace-thumbnail-dialog.component.css'],
})
export class StackTraceThumbnailDialogComponent implements OnInit {
  constructor(private clipboard: DialogClipboardService) {}

  ngOnInit(): void {}

  getContent(): string {
    return this.clipboard.getClipboard();
  }
}
