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
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../shared/components/table/table.component';
import { CellTypeChangerDirective } from '../shared/components/cell-type-changer.directive';
import { UnprocessedSearchActionsComponent } from './components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions/unprocessed-search-actions.component';
import { IssuesSearchActionsComponent } from './components/search/issues-search/issues-actions/issues-search-actions/issues-search-actions.component';
import { HomeComponent } from './components/home/home.component';
import { UnprocessedMessagesSearchComponent } from './components/search/unprocessed-messages-search/unprocessed-messages-search.component';
import { IssuesSearchComponent } from './components/search/issues-search/issues-search.component';
import { SidemenuComponent } from './components/home/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnprocessedMessagesSearchComponent,
    IssuesSearchComponent,
    SidemenuComponent,
    TableComponent,
    CellTypeChangerDirective,
    UnprocessedSearchActionsComponent,
    IssuesSearchActionsComponent
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
    SidemenuComponent,
    TableComponent,
    CellTypeChangerDirective
  ],
})
export class CoreModule {}
