import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CustomIconService} from './commons/service/custom-icon.service';
import {CustomTranslateService} from './commons/service/custom-translate.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private translate: CustomTranslateService, private customIconService: CustomIconService) {
  }

  init(): void {
    this.customIconService.init();
    this.translate.initTranslation();
  }

}
