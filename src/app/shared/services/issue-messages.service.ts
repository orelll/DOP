import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessageResponseDTO } from '../DTO/issueMessageResponseDTO';
import { DeserializeArray } from 'cerializr';
import { JsonArray } from 'cerializr/src/interfaces';
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
    // throw new Error('not implemented!');
  }

  fetchStackTrace(uuid: string): Observable<IssueMessageResponseDTO> {
    throw new Error('not implemented!');
  }
}
