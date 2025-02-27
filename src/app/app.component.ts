import { Component } from '@angular/core';
import {SidenavComponent} from './shared/layouts/sidenav/sidenav.component';
import {HeaderComponent} from './shared/layouts/header/header.component';

@Component({
  selector: 'app-root',
  imports: [SidenavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
