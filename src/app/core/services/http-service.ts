
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

/**
 * This is the wrapper for the angular HttpClient we should use in bamf-maris instead of the original HttpClient.
 * Should additional methods of the HttpClient be needed, they can simply be added with the same pattern
 * as those already existing.
 */
@Injectable({
    providedIn: 'root',
  })
export class HttpService {

    constructor(
        private httpClient: HttpClient) { }

    /**
     * Construct a GET request which interprets the body as JSON and returns it.
     * @params url the url to call
     * @ return an `Observable` of the body as an `Object`.
     */
    get<T>(url: string, options?: object): Observable<T> {
        return this.handleRequest(this.httpClient.get<T>(this.getFullUrl(url), options));
    }

    /**
     * Construct a POST request which interprets the body as JSON and returns it.
     * @params url the url to call
     * @params payload the body payload
     * @ return an `Observable` of the body as an `Object`.
     */
    post<T>(url: string, payload?: any, options?: object): Observable<T> {
        return this.handleRequest(this.httpClient.post<T>(this.getFullUrl(url), payload, options));
    }

    /**
     * Construct a PUT request which interprets the body as JSON and returns it.
     * @params url the url to call
     * @params payload the body payload
     * @ return an `Observable` of the body as an `Object`.
     */
    put<T>(url: string, payload?: any): Observable<T> {
        return this.handleRequest(this.httpClient.put<T>(url, payload));
    }

    /**
     * Construct a DELETE request which interprets the body as JSON and returns it.
     * @params url the url to call
     * @ return an `Observable` of the body as an `Object`.
     */
    delete<T>(url: string): Observable<T> {
        return this.handleRequest(this.httpClient.delete<T>(url));
    }

    /**
     * @params {Observable<T>} obs the observable to wrap with the optional spinner call
     * @ return {Observable<T>} an observable which will return the result of the given observable
     */
    private handleRequest<T>(obs: Observable<T>): Observable<T> {
        return obs.pipe(finalize(() => {
        }));
    }

    /**
     * Concatenate Base url
     * @param url = sub url
     */
    private getFullUrl(url: string) {
        return environment.restBaseUrl + url;
    }
}
