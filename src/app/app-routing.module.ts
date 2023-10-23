import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  {
		path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
		// canActivate: [AuthGuar]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
