import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-citizen-search',
  templateUrl: './citizen-search.component.html',
  styleUrls: ['./citizen-search.component.css']
})
export class CitizenSearchComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  searchClick() {
    this.communicationService.updateCitizens(this.firstName, this.lastName);
  }

}
