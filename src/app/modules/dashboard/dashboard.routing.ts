import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const dashboardRouting: Routes = [
  {
    path: 'dashboard/home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
    ]
  }
];
