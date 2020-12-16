import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isBusy = false;

  constructor() {}

  setBusy(busy: boolean): void {
    this.isBusy = busy;
  }

  checkIfBusy():boolean{
    return this.isBusy;
  }
}
