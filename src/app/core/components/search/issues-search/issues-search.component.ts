import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { map } from 'rxjs/internal/operators/map';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessageResponseDTO } from 'src/app/shared/DTO/issueMessageResponseDTO';
import { IssueMessage } from 'src/app/shared/models/issueMessage';
import { IssueMessageSearchCriteria } from 'src/app/shared/models/issueMessageSearchCriteria';
import { IssueMessagesService } from 'src/app/shared/services/issue-messages.service';

@Component({
  selector: 'app-issues-search',
  templateUrl: './issues-search.component.html',
  styleUrls: ['./issues-search.component.css'],
})
export class IssuesSearchComponent implements OnInit {
  searchCriteria: IssueMessageSearchCriteria = new IssueMessageSearchCriteria(
    0,
    10
  );

  resultsFound: IssueMessage[];

  constructor(private messagesService: IssueMessagesService) {}

  ngOnInit(): void {}

  search(): void {
    this.messagesService
      .search(this.searchCriteria).subscribe(e => {
        this.resultsFound = e.map(z => 
          {
            var xx = new IssueMessage();
            xx.UUID = z.UUID;
            xx.level = z.level;
            xx.message = z.message;
            xx.microServiceName =z.microServiceName;
            xx.timeStamp = z.timeStamp;
            return xx;
          })
      });
      // .pipe(
      // map(searchData => searchData.map(z => new IssueMessage()))
      
      //   )

      //   switchMap(searchData => new Observable<IssueMessage[]>(searchData.map(y => new IssueMessage())))
      // );
    // this.messagesService.search(this.searchCriteria).subscribe((results) => {
    //   console.log(`gathered ${results.length} elements during search`);
    //   this.resultsFound = results;
    // });
  }

  fetchStackTrace(uuid: string): void {
    console.log('called fetchStackTrace');
    const stackTrace = this.messagesService.fetchStackTrace(uuid);
    alert(stackTrace);
  }
}
