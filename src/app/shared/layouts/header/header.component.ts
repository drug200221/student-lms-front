import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from '@angular/material/toolbar';
import {SidenavService} from '../sidenav/sidenav.service';

@Component({
  selector: 'psk-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'student-lms-front';

  constructor(private sidenavService: SidenavService) {}

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }
}
