import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsTableComponent} from './component/contact/contacts-table/contacts-table.component';
import {ContactFormComponent} from './component/contact/contact-form/contact-form.component';
import {ContactDetailsComponent} from './component/contact/contact-details/contact-details.component';
import {HelpComponent} from './component/help/help.component';

const routes: Routes = [
  {
    path: 'contact/new',
    component: ContactFormComponent
  },
  {
    path: 'contact/all',
    component: ContactsTableComponent
  },
  {
    path: 'contact/all/details',
    component: ContactDetailsComponent
  },
  {
    path: 'contact/:contactId',
    component: ContactDetailsComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
