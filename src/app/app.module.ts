import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ROUTES } from './app-routes.module';
import { SharedModule } from './components/shared/shared.module';
import { HeroModule } from './components/hero/hero.module';
import { HeroWrapperComponent } from './components/hero/hero-wrapper/hero-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot( ROUTES, { }),
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
