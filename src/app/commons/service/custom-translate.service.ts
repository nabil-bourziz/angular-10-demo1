import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  private DEFAULT_LANGUAGE = 'fr';
  private language: string;
  private authorizedLanguages = new Set(['fr', 'en', 'es', 'ar']);

  constructor(private translate: TranslateService) {
  }

  initTranslation(): void {
    // read language from localStorage
    this.language = localStorage.getItem('language');
    if (!this.language) {
      // read language from Browser
      this.language = this.translate.getBrowserLang();
    }
    if (!this.authorizedLanguages.has(this.language)) {
      // set default language
      this.language = this.DEFAULT_LANGUAGE;
    }
    this.changeTranslation(this.language);
  }

  changeTranslation(lang: string): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(lang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(lang);
    // save language in localStorage
    localStorage.setItem('language', lang);
    // change html language to selected language
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

  }

  getCurrentLanguage(): string {
    return this.language;
  }
}
