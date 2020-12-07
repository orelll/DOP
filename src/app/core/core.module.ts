import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from '../app.component';
import { HomeComponent, IssueMessageThumbnailComponent, IssuesSearchComponent, SidemenuComponent, UnprocessedMessagesSearchComponent, UnprocessedMessageThumbnailComponent } from './index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    IssueMessageThumbnailComponent,
    UnprocessedMessageThumbnailComponent,
    SidemenuComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    IssueMessageThumbnailComponent,
    UnprocessedMessageThumbnailComponent,
    SidemenuComponent,
  ],
})
export class CoreModule {}
