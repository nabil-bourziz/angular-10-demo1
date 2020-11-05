import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ContactFormComponent} from './component/contact/contact-form/contact-form.component';
import {ContactDetailsComponent} from './component/contact/contact-details/contact-details.component';
import {ContactsTableComponent} from './component/contact/contacts-table/contacts-table.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MaskPhoneNumberPipe} from './utils/pipe/mask-phone-number.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HelpComponent} from './component/help/help.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppInitService} from './app-init.service';
import {NavbarComponent} from './component/navbar/navbar.component';
import {CommonHttpInterceptor} from './commons/interceptors/common-http-interceptor';

export function initializeApp(appInitService: AppInitService): () => void {
  return () => appInitService.init();
}

// AoT requires an exported function for factories
export function translateHttpLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    ContactsTableComponent,
    MaskPhoneNumberPipe,
    NavbarComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateHttpLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    /* Flex Module **/
    FlexModule,
    /* Material angular modules */
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
