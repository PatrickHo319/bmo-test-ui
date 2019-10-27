import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { CommunicationService } from './communication.service';
import { Person } from '../models/Person';

describe('CommunicationService', () => {
  let httpTestingController: HttpTestingController;
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CommunicationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCitizens()', () => {
    const mockCitizens: Person[] = [
      {
        firstName: "John",
        lastName: "Smith"
      },
      {
        firstName: "David",
        lastName: "Smith"
      }
    ];

    it('returned Observable should match the right data', () => {
      service.getCitizens(true)
        .subscribe(citizens => {
          expect(citizens.length).toEqual(2);
          expect(citizens[0].firstName).toEqual("John");
        });

      const req = httpTestingController.expectOne(service.citizensUrl);

      expect(req.request.method).toEqual('GET');

      req.flush(mockCitizens);
    });

    it('not retrieve data when initLoad is false', () => {
      service.getCitizens(false)
        .subscribe(citizens => {
          expect(citizens.length).toEqual(2);
          expect(citizens[0].firstName).toEqual("John");
        });

      httpTestingController.expectNone(service.citizensUrl);
    });

    describe('#with first name and/or last name', () => {
      it('filter by john', () => {
        service.updateCitizens('john', null);

        const req = httpTestingController.expectOne(service.citizensUrl + '?firstName=john');
      });

      it('filter by smith', () => {
        service.updateCitizens(null, 'smith');

        const req = httpTestingController.expectOne(service.citizensUrl + '?lastName=smith');
      });


      it('filter by john smith', () => {
        service.updateCitizens('john', 'smith');

        const req = httpTestingController.expectOne(service.citizensUrl + '?firstName=john&lastName=smith');
      });
    });
  });
});
