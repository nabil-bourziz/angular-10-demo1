import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  init(): void {
    this.matIconRegistry
      .addSvgIcon(
        'france-round-flag',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/languages/france-round-flag.svg')
      )
      .addSvgIcon('united-kingdom-round-flag',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/languages/united-kingdom-round-flag.svg')
      )
      .addSvgIcon('spain-round-flag',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/languages/spain-round-flag.svg')
      )
      .addSvgIcon('morocco-round-flag',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/languages/morocco-round-flag.svg')
      );
  }
}
