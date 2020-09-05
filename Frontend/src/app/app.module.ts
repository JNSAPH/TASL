import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputDirective, NbInputModule, NbListModule, NbToastrModule, NbUserModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { URLListComponent } from './urllist/urllist.component';
import { HttpClientModule } from '@angular/common/http';
import { NewshortComponent } from './newshort/newshort.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    URLListComponent,
    NewshortComponent,
    InfoCardComponent,
    LoginComponent,
    DashboardComponent,
    AccountListComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    NbSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
