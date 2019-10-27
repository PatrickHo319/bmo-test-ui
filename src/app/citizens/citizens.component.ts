import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/Person';
import { CommunicationService } from '../services/communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css'],
  providers: [CommunicationService]
})
export class CitizensComponent implements OnInit {
  citizens: Observable<Person[]>;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.citizens = this.communicationService.getCitizens(true);
  }
}