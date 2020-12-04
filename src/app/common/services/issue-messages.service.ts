import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueMessageResponseDTO } from '../DTO/issueMessageResponseDTO';

@Injectable({
  providedIn: 'root',
})
export class IssueMessagesService {
  constructor() {}

  search(
    page: number,
    pageSize: number,
    startDate?: Date,
    endDate?: Date,
    UUID?: string,
    message?: string,
    exception?: string
  ): Observable<IssueMessageResponseDTO[]> {
    throw new Error('not implemented!');
  }

  fetchStackTrace(uuid: string): Observable<IssueMessageResponseDTO> {
    throw new Error('not implemented!');
  }
}
