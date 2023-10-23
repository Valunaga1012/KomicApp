import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { characterDetailRouting } from './character-detail.routing';
import { CharacterDetailComponent } from './character-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';



@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(characterDetailRouting),
    SharedModule,
    DirectivesModule
  ]
})
export class CharacterDetailModule { }
