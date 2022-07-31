import { Routes } from '@angular/router';

import { HeroWrapperComponent } from './components/hero/hero-wrapper/hero-wrapper.component';

export const ROUTES: Routes = [
  {
    component: HeroWrapperComponent,
    path: '',
    loadChildren: () => import('./components/hero/hero.module').then(m => m.HeroModule)
  }
];
