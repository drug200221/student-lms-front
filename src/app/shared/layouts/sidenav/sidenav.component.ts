import {Component, inject} from '@angular/core';
import {MatSidenav, MatSidenavContent, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {SidenavService} from './sidenav.service';

@Component({
  selector: 'psk-sidenav',
  imports: [
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  protected sidenavService = inject(SidenavService);
}
