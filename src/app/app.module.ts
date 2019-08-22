import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SocialComponent } from './social/social.component';
import { VitaComponent } from './vita/vita.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SocialComponent,
    VitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
