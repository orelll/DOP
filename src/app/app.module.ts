import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnprocessedMessagesSearchComponent } from './search/unprocessed-messages-search/unprocessed-messages-search.component';
import { IssuesSearchComponent } from './search/issues-search/issues-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnprocessedMessageThumbnailComponent } from './search/unprocessed-messages-search/unprocessed-message-thumbnail/unprocessed-message-thumbnail/unprocessed-message-thumbnail.component';
import { IssueMessageThumbnailComponent } from './search/issues-search/issue-message-thumbnail/issue-message-thumbnail.component';
import { SidemenuComponent } from './home/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    IssueMessageThumbnailComponent,
    UnprocessedMessageThumbnailComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
