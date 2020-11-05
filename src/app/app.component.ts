import {Component} from '@angular/core';
import {CustomIconService} from './commons/service/custom-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-10-demo';

  constructor(private customIconService: CustomIconService) {
    this.customIconService.init();
  }
}
