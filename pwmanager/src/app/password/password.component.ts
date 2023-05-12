import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Site } from '../site';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})

export class PasswordComponent implements OnInit, AfterViewInit {

  site?: Site;

  @ViewChild('success', { static: false }) success!: ElementRef;

  constructor(
    private siteService: SiteService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.siteService.searchSites(params['site'])
          .subscribe(sites => {
            this.site = sites[0];
            this.passwordForm.get('url')!.setValue(this.site.url);
            this.passwordForm.get('name')!.setValue(this.site.name);
            this.passwordForm.get('category')!.setValue(this.site.category);
            this.passwordForm.get('username')!.setValue(this.site.user_or_email);
            this.passwordForm.get('password')!.setValue(this.site.password);
            this.passwordForm.get('notes')!.setValue(this.site.notes);
          });
    });
  }

  ngAfterViewInit() {
  }

  passwordForm = new FormGroup({
    url: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    notes: new FormControl('')
  });

  update(): void {
    this.site!.url = this.passwordForm.get('url')?.value || '';
    this.site!.name = this.passwordForm.get('name')?.value || '';
    this.site!.category = this.passwordForm.get('category')?.value || '';
    this.site!.user_or_email = this.passwordForm.get('username')?.value || '';
    this.site!.password = this.passwordForm.get('password')?.value || '';
    this.site!.notes = this.passwordForm.get('notes')?.value || '';

    this.siteService.updateSite(this.site!)
        .subscribe(site => {
          this.success.nativeElement.classList.remove("hidden");
          setTimeout(() => {
             this.success.nativeElement.classList.add("hidden");
          }, 3000);
        });
  }
}
