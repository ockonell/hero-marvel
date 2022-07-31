import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { UtilitiesModule } from '../utilities/utilities.module';


@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, HeroSearchComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    UtilitiesModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    HeroListComponent, HeroDetailComponent, HeroSearchComponent
  ]
})
export class HeroModule { }
