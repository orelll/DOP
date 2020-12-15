import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogClipboardService {
  private clipboard: string = '';

  constructor() {}

  setClipboard(data: string): void {
    this.clipboard = data;
  }

  getClipboard(): string {
    return this.clipboard;
  }
}
