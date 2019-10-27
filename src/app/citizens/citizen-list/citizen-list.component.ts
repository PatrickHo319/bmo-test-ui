import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css']
})
export class CitizenListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName'];

  @Input()
  citizens: Observable<Person[]>;

  constructor() { }

  ngOnInit() {
  }

}
