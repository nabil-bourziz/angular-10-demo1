import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomTranslateService} from '../service/custom-translate.service';
import {request} from 'http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpInterceptor implements HttpInterceptor {

  constructor(private translateService: CustomTranslateService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request: ' + req.body);
    const lang = this.translateService.getCurrentLanguage();
    req = req.clone({
      setHeaders: {
        'Accept-Language': lang
      }
    });
    return next.handle(req);
  }
}
