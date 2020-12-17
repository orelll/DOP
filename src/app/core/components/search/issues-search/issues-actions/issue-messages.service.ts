import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessageResponseDTO } from 'src/app/shared/dto/issueMessageResponseDTO';
import { IssueMessageSearchCriteria } from 'src/app/shared/models/issueMessageSearchCriteria';
import { RandomsGenerator } from 'src/app/shared/tests-helpers/random-generators';

@Injectable({
  providedIn: 'root',
})
export class IssueMessagesService {
  constructor(private httpCaller: HttpService) {}

  search(
    searchCriteria: IssueMessageSearchCriteria
  ): Observable<IssueMessageResponseDTO[]> {
    return this.httpCaller.get<IssueMessageResponseDTO[]>('../../assets/mockResponses/IssueMessageResponseDTO_Mock.json').pipe(delay(500));
  }

  fetchStackTrace(uuid: string): string {
    return RandomsGenerator.getRandomString(250);
  }
}
