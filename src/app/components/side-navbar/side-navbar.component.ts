import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  constructor(public settingsService: SettingsService) {
    this.menuItems = ROUTES;
    this.activeFontColor = '#FFFFFF';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }

  ngOnInit() {
    this.color = this.settingsService.getSidebarFilter();
    // this.settingsService.sidebarFilterUpdate.subscribe((filter: string) => {
    //   this.color = filter;
    //   if (filter === '#fff') {
    //     this.activeFontColor = 'rgba(0,0,0)';
    //   }else {
    //     this.activeFontColor = 'rgba(255,255,255,.8)';
    //   }
    // });
    // this.settingsService.sidebarColorUpdate.subscribe((color: string) => {
    //   if (color === '#fff') {
    //     this.normalFontColor = 'rgba(0,0,0)';
    //     this.dividerBgColor = 'rgba(0,0,0,.1)';
    //   }else {
    //     this.normalFontColor = 'rgba(255,255,255,.8)';
    //     this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    //   }
    // });
  }
  ngOnDestroy() {
    this.settingsService.sidebarFilterUpdate.unsubscribe();
    this.settingsService.sidebarColorUpdate.unsubscribe();
  }

  ngAfterViewInit() {
  }
}