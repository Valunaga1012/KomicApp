import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { dashboardRouting } from './dashboard.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRouting),
    SharedModule,
    DirectivesModule,
    ModalModule.forRoot(),
    FormsModule
  ]
})
export class DashboardModule { }
