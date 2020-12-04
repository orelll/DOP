import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  private loaderSubject = new Subject<any>();
  public loaderState = this.loaderSubject.asObservable();

  constructor() {}

  show(): void {
    this.loaderSubject.next({ show: true });
  }

  hide(): void {
    this.loaderSubject.next({ show: false });
  }
}
