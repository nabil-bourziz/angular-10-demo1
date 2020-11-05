import {Component, OnInit} from '@angular/core';
import {CustomTranslateService} from '../../commons/service/custom-translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [
    {name: 'new-contact', path: '/contact/new'},
    {name: 'contacts', path: '/contact/all'},
    {name: 'contacts-details', path: 'contact/all/details'},
    {name: 'help', path: '/help'}
  ];
  languages = [
    {code: 'fr', name: 'Français', icon: 'france-round-flag'},
    {code: 'en', name: 'English', icon: 'united-kingdom-round-flag'},
    {code: 'es', name: 'Español', icon: 'spain-round-flag'},
    {code: 'ar', name: 'العربية', icon: 'morocco-round-flag'}
  ];
  activeLink = this.links[0];
  selectedLanguage;

  constructor(private customTranslateService: CustomTranslateService) {
  }

  ngOnInit(): void {
    const currentLang = this.customTranslateService.getCurrentLanguage();
    this.selectedLanguage = this.languages.find(lang => lang.code === currentLang);
  }

  changeTranslateLanguage(): void {
    this.customTranslateService.changeTranslation(this.selectedLanguage.code);
  }

}
