import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private httpClient: HttpClient) { }

  getCitizens(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`./api/citizens`);
  }
}
