import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersComponent } from './characters.component';
import { characterRouting } from './characters.routing';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(characterRouting),
    SharedModule,
    FormsModule,
    DirectivesModule,
    ModalModule.forRoot(),
  ],
})
export class CharactersModule {}
