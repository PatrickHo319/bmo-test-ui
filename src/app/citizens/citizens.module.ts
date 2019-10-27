import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizensRoutingModule } from './citizens-routing.module';
import { CitizensComponent } from './citizens.component';
import { CommunicationService } from '../services/communication.service';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CitizenSearchComponent } from './citizen-search/citizen-search.component';

@NgModule({
  declarations: [CitizensComponent, CitizenSearchComponent],
  imports: [
    CommonModule,
    CitizensRoutingModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [CommunicationService]
})
export class CitizensModule { }
