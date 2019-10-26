import { Component, OnInit } from '@angular/core';
import { Person, Geneder } from '../models/Person';
import { CommunicationService } from '../services/communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css'],
  providers: [CommunicationService]
})
export class CitizensComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender'];
  citizens: Observable<Person[]>;
  firstName: String;
  lastName: String;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.citizens = this.communicationService.getCitizens();
  }

  searchClick() {
    this.citizens = this.communicationService.getCitizens(this.firstName, this.lastName);
  }
}