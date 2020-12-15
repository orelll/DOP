import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http-service';
import { UnprocessedMessageResponseDTO } from '../DTO/unprocessedMessageResponseDTO';
import { UnprocessedMessageSearchCriteria } from '../models/unprosessedMessageSearchCriteria';

@Injectable({
  providedIn: 'root',
})
export class UnprocessedMessagesService {
  constructor(private httpCaller: HttpService) {}

  search(
   searchCriteria: UnprocessedMessageSearchCriteria
  ): Observable<UnprocessedMessageResponseDTO[]> {
    return this.httpCaller.get<UnprocessedMessageResponseDTO[]>('../../assets/mockResponses/UnprocessedMessageResponseDTO_mock.json');
  }

  republishMessage(id: number): void {
    throw new Error('not implemented!');
  }

  deleteMessage(id: number): void {
    throw new Error('not implemented!');
  }

  archiveMessage(id: number): void {
    throw new Error('not implemented!');
  }
}
