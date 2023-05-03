import {TestBed} from '@angular/core/testing';

import {BookService} from './book.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Store, StoreModule} from '@ngrx/store';
import {of} from 'rxjs';
import {BookDataInterface} from '@App/app/src/app/interfaces/book-data-interface';

describe('BookService', () => {

  let service: BookService;

  beforeEach(() => {
    const httpsSpy = {
      get: () => of<BookDataInterface[]>([]),
    };
    const storeSpy = {
      dispatch: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {provide: HttpClient, useValue: httpsSpy},
        {provide: Store, useValue: storeSpy},
      ],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
