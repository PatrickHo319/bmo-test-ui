import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Person } from '../models/Person';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subject: Subject<Person[]> = new ReplaySubject<Person[]>(1)
  constructor(private httpClient: HttpClient) { }

  getCitizens(firstName: string = null, lastName: string = null): Observable<Person[]> {
    this.updateCitizens(firstName, lastName);

    return this.subject.asObservable();
  }

  updateCitizens(firstName: string, lastName: string) {
    this.httpClient.get<Person[]>(`./api/citizens`, {
      params: this.getHttpParams(firstName, lastName)
    }).subscribe(citizens => this.subject.next(citizens));
  }

  private getHttpParams(firstName: string, lastName: string): any {
    const params = {};

    if (firstName) {
      params["firstName"] = firstName;
    }

    if (lastName) {
      params["lastName"] = lastName;
    }

    return params;
  }
}
