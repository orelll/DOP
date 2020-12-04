import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from '../app.component';
import { HomeComponent } from './components/home/home.component';
import { UnprocessedMessagesSearchComponent } from './components/search/unprocessed-messages-search/unprocessed-messages-search.component';
import { IssuesSearchComponent } from './components/search/issues-search/issues-search.component';
import { SidemenuComponent } from './components/home/sidemenu/sidemenu.component';
import { IssueMessageThumbnailComponent } from './components/search/issues-search/issue-message-thumbnail/issue-message-thumbnail.component';
import { UnprocessedMessageThumbnailComponent } from './components/search/unprocessed-messages-search/unprocessed-message-thumbnail/unprocessed-message-thumbnail/unprocessed-message-thumbnail.component';
import { AppRoutingModule } from '../app-routing.module';

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
