import { Component, OnInit } from '@angular/core';
import { Person, Geneder } from '../models/Person';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css'],
  providers: [CommunicationService]
})
export class CitizensComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender'];
  citizens: Person[] = [
    {
      firstName: "John",
      lastName: "Smith",
      age: 20,
      gender: Geneder.Male
    }
  ];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  searchClick() {
    console.log("searchClick");
    this.communicationService.getCitizens();
  }
}