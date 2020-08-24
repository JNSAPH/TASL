import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputDirective, NbInputModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { URLListComponent } from './urllist/urllist.component';
import { HttpClientModule } from '@angular/common/http';
import { NewshortComponent } from './newshort/newshort.component';

@NgModule({
  declarations: [
    AppComponent,
    URLListComponent,
    NewshortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
