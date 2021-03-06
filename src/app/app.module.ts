import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { AuthComponent } from './auth/auth.component';


import {AuthModule } from './auth/auth.module';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {provideRoutes} from '@angular/router';
import {DocModule} from './doctors/doc.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    DocModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


