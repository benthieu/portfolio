import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SocialComponent } from './social/social.component';
import { VitaComponent } from './vita/vita.component';
import { WavesComponent } from './waves/waves.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SocialComponent,
    VitaComponent,
    WavesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
