import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'citizen-list', loadChildren: () => import('./citizens/citizens.module').then(m => m.CitizensModule) }, { path: 'citizen-list', loadChildren: () => import('./citizens/citizens.module').then(m => m.CitizensModule) },
  { path: '', redirectTo: '/citizen-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
