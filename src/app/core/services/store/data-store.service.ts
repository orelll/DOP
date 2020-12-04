import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {
  chartData = {};

  activeCockpit: string;

  constructor() {}

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  setToken(token: string): void {
    return localStorage.setItem('jwtToken', token);
  }

  removeToken(): void {
    localStorage.clear();
  }
}
