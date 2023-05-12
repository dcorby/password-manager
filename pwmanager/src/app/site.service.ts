import { Site } from './site';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SiteService {

  private sitesUrl = 'test-api/sites';

  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.sitesUrl)
      .pipe(
         tap(_ => this.log('fetched sites')),
         catchError(this.handleError<Site[]>('getSites', []))
      );
  }

  searchSites(term: string): Observable<Site[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Site[]>(`${this.sitesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found sites matching "${term}"`) :
         this.log(`no sites matching "${term}"`)),
      catchError(this.handleError<Site[]>('searchSites', []))
    );
  }

  updateSite(site: Site): Observable<any> {
    return this.http.put(this.sitesUrl, site, this.httpOptions).pipe(
      tap(_ => {
        this.log(`updated site id=${site.id}`);
      }),
      catchError(this.handleError<any>('updateSite'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`SiteService: ${message}`);
  }
}
