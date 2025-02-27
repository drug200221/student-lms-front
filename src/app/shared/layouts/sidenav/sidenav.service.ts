import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavOpen = signal(false);

  toggleSidenav() {
    this.sidenavOpen.set(!this.sidenavOpen());
  }
}
