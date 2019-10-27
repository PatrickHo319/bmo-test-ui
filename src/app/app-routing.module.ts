import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'citizens', loadChildren: () => import('./citizens/citizens.module').then(m => m.CitizensModule) }, { path: 'citizens', loadChildren: () => import('./citizens/citizens.module').then(m => m.CitizensModule) },
  { path: '', redirectTo: '/citizens', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
