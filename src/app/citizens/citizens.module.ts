import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizensRoutingModule } from './citizens-routing.module';
import { CitizensComponent } from './citizens.component';
import { CommunicationService } from '../services/communication.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CitizensComponent],
  imports: [
    CommonModule,
    CitizensRoutingModule,
    MatTableModule,
  ]
})
export class CitizensModule { }
