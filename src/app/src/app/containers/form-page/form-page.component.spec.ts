import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FormPageComponent} from './form-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookFormComponent} from '../../components/book-form/book-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BookService} from '../../services/book.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppMaterialModule} from '@App/app/app-material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;

  beforeEach(waitForAsync(() => {

    const bookServiceSpy = {
      addBook: jest.fn(),
      loadBooks: jest.fn(),
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
        BookFormComponent,
        FormPageComponent
      ],
      providers: [
        {provide: BookService, useValue: bookServiceSpy},
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
