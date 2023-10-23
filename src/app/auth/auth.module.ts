import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { DirectivesModule } from '../core/directives/directives.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouting),
    SharedModule,
    DirectivesModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
