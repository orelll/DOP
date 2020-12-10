import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../shared/components/table/table.component';
import { CellTypeChangerDirective } from '../shared/components/cell-type-changer.directive';
import { HomeComponent } from './components/home/home.component';
import { UnprocessedMessagesSearchComponent } from './components/search/unprocessed-messages-search/unprocessed-messages-search.component';
import { IssuesSearchComponent } from './components/search/issues-search/issues-search.component';
import { StackTraceThumbnailDialogComponent } from './components/search/issues-search/dialogs/stack-trace-thumbnail/stack-trace-thumbnail-dialog.component';
import { IssuesSearchActionsComponent } from './components/search/issues-search/issues-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from './components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions.component';
import { YesNoDialogComponent } from '../shared/components/dialogs/yes-no/yes-no-dialog.component';
import { RepublishDialogComponent } from './components/search/unprocessed-messages-search/dialogs/republish-dialog/republish-dialog.component';
import { ArchiveDialogComponent } from './components/search/unprocessed-messages-search/dialogs/archive-dialog/archive-dialog.component';
import { DeleteDialogComponent } from './components/search/unprocessed-messages-search/dialogs/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    TableComponent,
    CellTypeChangerDirective,
    UnprocessedSearchActionsComponent,
    IssuesSearchActionsComponent,
    StackTraceThumbnailDialogComponent,
    YesNoDialogComponent,
    RepublishDialogComponent,
    ArchiveDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatSelectModule,
    MatGridListModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    TableComponent,
    CellTypeChangerDirective,
    StackTraceThumbnailDialogComponent,
    YesNoDialogComponent
  ],
})
export class CoreModule {}
