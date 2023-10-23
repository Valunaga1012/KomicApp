import { Routes } from '@angular/router';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

export const characterDetailRouting: Routes = [
  { path: ':id', component: CharacterDetailComponent },
];
