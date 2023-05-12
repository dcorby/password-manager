import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Site } from './site';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  // Get unix time here: https://codebeautify.org/unix-time-stamp-converter
  createDb() {
    const sites = [
      { id: 1, name: 'Google', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.google.com", password: "********", notes: "" },
      { id: 2, name: 'Yahoo',  category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.yahoo.com", password: "********", notes: "" },
      { id: 3, name: 'Facebook', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.facebook.com", password: "********", notes: "" },
      { id: 4, name: 'Instagram', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.instagram.com", password: "********", notes: "" },
      { id: 5, name: 'LinkedIn', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.linkedin.com", password: "********", notes: "" },
      { id: 6, name: 'WhatsApp', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.whatsapp.com", password: "********", notes: "" },
      { id: 7, name: 'TikTok', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.tiktok.com", password: "********", notes: "" },
      { id: 8, name: 'Pinterest', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.pinterest.com", password: "********", notes: "" },
      { id: 9, name: 'Wikipedia', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.wikipedia.com", password: "********", notes: "" },
      { id: 10, name: 'YouTube', category: "No category", last_used: 1682946300, user_or_email: "dmcorby@gmail.com", url: "www.youtube.com", password: "********", notes: "" }
    ];
    return {sites};
  }

  // Overrides the genId method to ensure that a site always has an id
  // If the sites array is empty, the method below returns the initial number (1)
  // if the sites array is not empty, the method below returns the highest site id + 1
  genId(sites: Site[]): number {
    return sites.length > 0 ? Math.max(...sites.map(site => site.id)) + 1 : 1;
  }
}
