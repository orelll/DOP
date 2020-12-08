import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import { AppComponent } from '../app.component';
import { HomeComponent, IssueMessageThumbnailComponent, IssuesSearchComponent, SidemenuComponent, UnprocessedMessagesSearchComponent, UnprocessedMessageThumbnailComponent } from './index';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../shared/components/table/table.component';
import { AppComponentContainer } from '../shared/components/anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    IssueMessageThumbnailComponent,
    UnprocessedMessageThumbnailComponent,
    SidemenuComponent,
    TableComponent,
    AppComponentContainer
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule
  ],
  exports: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    IssueMessageThumbnailComponent,
    UnprocessedMessageThumbnailComponent,
    SidemenuComponent,
    TableComponent,
    AppComponentContainer
  ],
})
export class CoreModule {}
