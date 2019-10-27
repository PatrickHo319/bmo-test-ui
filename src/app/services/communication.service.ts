import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Person } from '../models/Person';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  readonly citizensUrl = './api/citizens';
  private subject: Subject<Person[]> = new ReplaySubject<Person[]>(1)
  constructor(private httpClient: HttpClient) { }

  getCitizens(initLoad: boolean): Observable<Person[]> {
    if (initLoad) {
      this.updateCitizens();
    }

    return this.subject.asObservable();
  }

  updateCitizens(firstName: string = null, lastName: string = null) {
    this.httpClient.get<Person[]>(this.citizensUrl, {
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
