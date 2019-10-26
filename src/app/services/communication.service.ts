import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(http: HttpClient) { }

  getCitizens(): Observable<Person[]> {
    console.log("called getCitizens");
    return null;
  }
}
