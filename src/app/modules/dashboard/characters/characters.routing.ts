import { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';

export const characterRouting: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters',
    loadChildren: () => import('./../character-detail/character-detail.module').then(m => m.CharacterDetailModule)
  },
];
