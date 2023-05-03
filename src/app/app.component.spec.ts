import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppMaterialModule} from './app-material.module';
import {RouterLinkDirectiveStub} from '../testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {
}

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkDirectiveStub,
        RouterOutletStubComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppMaterialModule,
        NoopAnimationsModule,
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Books'`, () => {
    expect(component.title).toEqual('Books');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Books');
  });
});
