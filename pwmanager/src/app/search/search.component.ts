import { Component, EventEmitter, Output } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../site.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  sites$!: Observable<Site[]>;
  private searchTerms = new Subject<string>();

  @Output() redirect:EventEmitter<string> = new EventEmitter<string>();

  constructor(private siteService: SiteService) {}

  search(term: string): void {
    this.redirect.emit(term)
  }
}
