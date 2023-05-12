import { Component, Input, OnInit } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @Input() term?: string;

  sites: Site[] = [];

  constructor(private siteService: SiteService,
              private router: Router) {}

  ngOnInit(): void {
    this.searchSites();
  }

  ngOnChanges(): void {
    this.searchSites();
  }

  searchSites(): void {
    if (this.term) {
      this.siteService.searchSites(this.term)
          .subscribe(sites => {
           this.sites = sites;
          });
    } else {
      this.siteService.getSites()
          .subscribe(sites => {
           this.sites = sites;
          });
    }
  }

  selectSite(name: string): void {
    this.router.navigate([`/passwords/${name.toLowerCase()}`]);
  }
}
