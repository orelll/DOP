import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnprocessedMessageResponseDTO } from '../DTO/unprocessedMessageResponseDTO';

@Injectable({
  providedIn: 'root',
})
export class UnprocessedMessagesService {
  constructor() {}

  search(
    page: number,
    pageSize: number,
    publisher?: number,
    company?: string,
    subscriber?: number,
    resource?: string,
    httpCode?: string
  ): Observable<UnprocessedMessageResponseDTO> {
    throw new Error('not implemented!');
  }

  republishMessage(id: number): void {
    throw new Error('not implemented!');
  }

  deleteMessage(id: number): void {
    throw new Error('not implemented!');
  }

  archoveMessage(id: number): void {
    throw new Error('not implemented!');
  }
}
