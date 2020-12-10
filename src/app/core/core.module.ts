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

import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../shared/components/table/table.component';
import { CellTypeChangerDirective } from '../shared/components/cell-type-changer.directive';
import { HomeComponent } from './components/home/home.component';
import { UnprocessedMessagesSearchComponent } from './components/search/unprocessed-messages-search/unprocessed-messages-search.component';
import { IssuesSearchComponent } from './components/search/issues-search/issues-search.component';
import { StackTraceThumbnailComponent } from './components/search/issues-search/stack-trace-thumbnail/stack-trace-thumbnail.component';
import { IssuesSearchActionsComponent } from './components/search/issues-search/issues-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from './components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions.component';

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
    StackTraceThumbnailComponent,
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
    MatDialogModule
  ],
  exports: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    TableComponent,
    CellTypeChangerDirective,
  ],
})
export class CoreModule {}
