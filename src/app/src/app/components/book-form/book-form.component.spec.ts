import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {Router} from '@angular/router';
import {jest} from '@jest/globals';

import {BookFormComponent} from './book-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from '@App/app/app-material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(waitForAsync(() => {

    const routerSpy = {
      navigate: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AppMaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [
        BookFormComponent
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
      ],
    })
      .compileComponents();


    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
