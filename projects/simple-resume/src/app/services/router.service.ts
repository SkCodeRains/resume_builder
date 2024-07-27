import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  async navigate(url: string): Promise<any> {
    setTimeout(() => {
      return this.router.navigate([url], { skipLocationChange: true })
    }, 300);

  }
}
