import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { IssuesSearchComponent } from './core/components/search/issues-search/issues-search.component';
import { UnprocessedMessagesSearchComponent } from './core/components/search/unprocessed-messages-search/unprocessed-messages-search.component';

const routes: Routes = [
  {
    path: 'unprocessed-messages-search',
    component: UnprocessedMessagesSearchComponent,
  },
  { path: 'issues-messages-search', component: IssuesSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
