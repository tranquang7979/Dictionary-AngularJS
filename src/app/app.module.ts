import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // use for TWO WAY binding
import { HttpModule } from '@angular/http';

import { IpService } from './ip.service';

import { AppComponent } from './app.component';

import {WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';
import { CryptoComponent } from './sign-in-crypto.component';

import { AppRoutingModule } from './app-routing.module'; // import this module after move routers to 'app-routing.module.ts'
/* // moved to 'app-routing.module.ts'
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Routes, RouterModule } from '@angular/router';
const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'contact-detail', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    CryptoComponent
    //ContactsComponent, // moved to 'app-routing.module.ts'
    //ContactDetailComponent, // moved to 'app-routing.module.ts'
    //PageNotFoundComponent // moved to 'app-routing.module.ts'
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,  // import this module after move routers to 'app-routing.module.ts'
    //RouterModule.forRoot(routesConfig) // moved to 'app-routing.module.ts'
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
