import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: HeroListComponent,
    data: {
      title: 'Lista de Heroes'
    }
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    data: {
      title: 'Detalles del Heroe'
    }
  },
  {
    path: 'search',
    component: HeroSearchComponent,
    data: {
      title: 'Busqueda de Heroes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
