import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-citizen-search',
  templateUrl: './citizen-search.component.html',
  styleUrls: ['./citizen-search.component.css'],
  providers: [CommunicationService]
})
export class CitizenSearchComponent implements OnInit {
  firstName: string;
  lastName: string;
  citizens: Observable<Person[]>;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.citizens = this.communicationService.getCitizens(false);
  }

  searchClick() {
    this.communicationService.updateCitizens(this.firstName, this.lastName);
  }

}
