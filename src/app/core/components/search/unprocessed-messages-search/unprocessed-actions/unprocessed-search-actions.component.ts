import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';
import { UnprocessedMessagesService } from 'src/app/shared/services';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { ArchiveDialogComponent } from '../dialogs/archive-dialog/archive-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { RepublishDialogComponent } from '../dialogs/republish-dialog/republish-dialog.component';

@Component({
  selector: 'app-unprocessed-search-actions',
  templateUrl: './unprocessed-search-actions.component.html',
  styleUrls: ['./unprocessed-search-actions.component.css'],
})
export class UnprocessedSearchActionsComponent implements OnInit {
  message: UnprocessedMessage;

  constructor(
    public dialog: MatDialog,
    private clipboard: DialogClipboardService,
    private messagesService: UnprocessedMessagesService
  ) {}

  ngOnInit(): void {}

  republishMessage(): void {
    console.log(`Called republish for ${this.message.id}`);

    this.clipboard.setClipboard('republish');

    const dialogRef = this.dialog.open(RepublishDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        console.log(`archiving message with Id: ${this.message.id}`);
        this.messagesService.republishMessage(this.message.id);
      }
    });
  }

  archiveMessage(): void {
    console.log(`Called archive for ${this.message.id}`);

    this.clipboard.setClipboard('archive');

    const dialogRef = this.dialog.open(ArchiveDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        console.log(`archiving message with Id: ${this.message.id}`);
        this.messagesService.archiveMessage(this.message.id);
      }
    });
  }

  deleteMessage(): void {
    console.log(`Called delete for ${this.message.id}`);

    this.clipboard.setClipboard('delete');

    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        console.log(`deleting message with Id: ${this.message.id}`);
        this.messagesService.deleteMessage(this.message.id);
      }
    });
  }
}
