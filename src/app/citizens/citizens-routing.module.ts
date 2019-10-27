import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizensComponent } from './citizens.component';
import { CitizenSearchComponent } from './citizen-search/citizen-search.component';

const routes: Routes = [
  { path: '', component: CitizensComponent },
  { path: 'search', component: CitizenSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizensRoutingModule { }
