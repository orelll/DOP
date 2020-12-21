import { Optional } from '@angular/core';
import { Component, Host, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ArchiveDialogComponent } from '../../dialogs/archive-dialog/archive-dialog.component';
import { DeleteDialogComponent } from '../../dialogs/delete-dialog/delete-dialog.component';
import { UnprocessedMessagesSearchComponent } from '../../unprocessed-messages-search.component';
import { SelectedItemsService } from '../selected-items.service';
import { UnprocessedMessagesService } from '../unprocessed-messages.service';
import { UnprocessedSearchActionsComponent } from '../unprocessed-search-actions/unprocessed-search-actions.component';

@Component({
  selector: 'app-common-action-bar',
  templateUrl: './common-action-bar.component.html',
  styleUrls: ['./common-action-bar.component.css'],
})
export class CommonActionBarComponent implements OnInit {
  constructor(
    public selectedItems: SelectedItemsService,
    private clipboard: DialogClipboardService,
    public spinnerService: SpinnerService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private messagesService: UnprocessedMessagesService,
    @Optional() private searchForm: UnprocessedMessagesSearchComponent
  ) {}

  ngOnInit(): void {}

  archiveMessage(): void {
    this.clipboard.setClipboard('archive');

    const dialogRef = this.dialog.open(ArchiveDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.archiveWholeList();
        this.searchForm.onSubmit();
      }
    });
  }

  deleteMessage(): void {
    this.clipboard.setClipboard('delete');

    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.deleteWholeList();
        this.searchForm.onSubmit();
      }
    });
  }

  private archiveWholeList(): void {
    this.spinnerService.setBusy(true);

    this.selectedItems.selected.forEach((messageId) => {
      console.log(`archiving message with Id: ${messageId}`);
      this.messagesService.archiveMessage(messageId);
    });

    this.spinnerService.setBusy(false);
    this.snackBar.open('Message archived', 'ok', {
      duration: 2000,
    });
    this.selectedItems.emptyList();
  }

  private deleteWholeList(): void {
    this.spinnerService.setBusy(true);
    this.selectedItems.selected.forEach((messageId) => {
      console.log(`deleting message with Id: ${messageId}`);
      this.messagesService.deleteMessage(messageId);
    });

    this.spinnerService.setBusy(false);
    this.snackBar.open('Message deleted', 'ok', {
      duration: 2000,
    });
    this.selectedItems.emptyList();
  }
}
