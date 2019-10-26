import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizensComponent } from './citizens.component';

const routes: Routes = [{ path: '', component: CitizensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizensRoutingModule { }
