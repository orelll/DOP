import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueMessageResponseDTO } from '../DTO/issueMessageResponseDTO';
import { IssueMessageSearchCriteria } from '../entities/issueMessageSearchCriteria';

@Injectable({
  providedIn: 'root',
})
export class IssueMessagesService {
  constructor() {}

  search(
    searchCriteria: IssueMessageSearchCriteria
  ): Observable<IssueMessageResponseDTO[]> {
    throw new Error('not implemented!');
  }

  fetchStackTrace(uuid: string): Observable<IssueMessageResponseDTO> {
    throw new Error('not implemented!');
  }
}
