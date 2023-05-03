import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookFormComponent} from '../../components/book-form/book-form.component';
import {FormPageComponent} from '../form-page/form-page.component';
import {Store, StoreModule} from '@ngrx/store';
import {booksReducer} from '../../state/books.reducer';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from '@App/app/app-material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BookService} from '@App/app/src/app/services/book.service';
import {of} from 'rxjs';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(waitForAsync(() => {
    const bookServiceSpy = {
      addBook: jest.fn(),
      loadBooks: jest.fn(),
    };
    const storeSpy = {
      select: jest.fn(() => { return of([]); }),
    };

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppMaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [
        ListPageComponent
      ],
      providers: [
        { provide: BookService, useValue: bookServiceSpy },
        { provide: Store, useValue: storeSpy },
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
