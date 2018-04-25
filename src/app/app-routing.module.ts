import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { ContactsComponent } from './contacts/contacts.component'; // moved to 'contacts.module.ts'
import { ContactsModule } from './contacts/contacts.module';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
  //{ path: 'contacts', component: ContactsComponent}, // moved to 'contacts.module.ts'
  { path: 'contact-detail', component: ContactDetailComponent},
  { path: 'contact-detail/:id/:name', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        ContactsModule,
        RouterModule.forRoot(routesConfig)],
    declarations: [
        PageNotFoundComponent,
        //ContactsComponent, // moved to 'contacts.module.ts'
        ContactDetailComponent
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}