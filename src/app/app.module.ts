import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListPageComponent} from './src/app/containers/list-page/list-page.component';
import {FormPageComponent} from './src/app/containers/form-page/form-page.component';
import {BookFormComponent} from './src/app/components/book-form/book-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {LuxonModule} from 'luxon-angular';
import {
  LuxonDateAdapter,
  MAT_LUXON_DATE_ADAPTER_OPTIONS,
  MAT_LUXON_DATE_FORMATS
} from '@angular/material-luxon-adapter';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from '@ngrx/store';
import {booksReducer} from './src/app/state/books.reducer';
import {HttpClientModule} from '@angular/common/http';
import {AppMaterialModule} from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    FormPageComponent,
    BookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LuxonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({books: booksReducer}),
    AppMaterialModule,
  ],
  providers: [
    LuxonDateAdapter,
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_LUXON_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private luxonDateAdapter: LuxonDateAdapter) {
    this.luxonDateAdapter.setLocale('nl');


  }
}
