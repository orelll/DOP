import { Component, OnInit } from '@angular/core';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css'],
})
export class YesNoDialogComponent implements OnInit {
  constructor(private clipboard: DialogClipboardService) {}

  ngOnInit(): void {}
  getContent(): string {
    return this.clipboard.getClipboard();
  }
}
