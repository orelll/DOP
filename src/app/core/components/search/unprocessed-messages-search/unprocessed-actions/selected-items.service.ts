import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class SelectedItemsService {
  private selectedIds: number[] = [];

  get selected(): number[] {
    return this.selectedIds;
  }

  constructor() {}

  addChecked(id: number): void {
    if (_.indexOf(this.selectedIds, id) < 0) {
      this.selectedIds.push(id);
    }
  }

  removeChecked(id: number): void {
    const indexFound = _.indexOf(this.selectedIds, id);
    if (indexFound >= 0) {
      this.selectedIds.splice(indexFound, 1);
    }
  }

  emptyList(): void {
    this.selectedIds = [];
  }
}
