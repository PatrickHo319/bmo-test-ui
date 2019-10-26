import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  constructor(private httpClient: HttpClient) { }

  getCitizens(firstName: string = null, lastName: string = null): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`./api/citizens`, {
      params: this.getHttpParams(firstName, lastName)
    });
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
