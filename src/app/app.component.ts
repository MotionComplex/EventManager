import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading = false;

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      // register customer icons
      this.iconRegistry.addSvgIconInNamespace('assets', 'xenocracy_white', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/xenocracy_white.svg'));
      this.iconRegistry.addSvgIconInNamespace('assets', 'xenocracy_black', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/xenocracy_black.svg'));
      this.iconRegistry.addSvgIconInNamespace('assets', 'drum_army_black', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/drum_army_black.svg'));
      this.iconRegistry.addSvgIconInNamespace('assets', 'drum_army_white', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/drum_army_white.svg'));
  }
}
