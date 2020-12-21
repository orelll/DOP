import { Component, OnInit } from '@angular/core';
import { SelectedItemsService } from '../selected-items.service';

@Component({
  selector: 'app-unprocessed-action-check',
  templateUrl: './unprocessed-action-check.component.html',
  styleUrls: ['./unprocessed-action-check.component.css'],
})
export class UnprocessedActionCheckComponent implements OnInit {
  id: number;
  set checked(isChecked: boolean) {
    this._checked = isChecked;
    if (this._checked) {
      this.selectedList.addChecked(this.id);
    } else {
      this.selectedList.removeChecked(this.id);
    }
  }

  get checked(): boolean {
    return this._checked;
  }

  private _checked: boolean;

  constructor(private selectedList: SelectedItemsService) {}

  ngOnInit(): void {}
}
