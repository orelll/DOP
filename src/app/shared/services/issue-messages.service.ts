import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessageResponseDTO } from '../DTO/issueMessageResponseDTO';
import { IssueMessageSearchCriteria } from '../models/issueMessageSearchCriteria';
@Injectable({
  providedIn: 'root',
})
export class IssueMessagesService {
  constructor(private httpCaller: HttpService) {}

  search(
    searchCriteria: IssueMessageSearchCriteria
  ): Observable<IssueMessageResponseDTO[]> {
    return this.httpCaller.get<IssueMessageResponseDTO[]>('../../assets/mockResponses/IssueMessageResponseDTO_Mock.json');
  }

  fetchStackTrace(uuid: string): string {
    return 'trolololo';
  }
}
