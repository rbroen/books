import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Book} from '../models/book';
import {BookDataInterface} from '../interfaces/book-data-interface';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {BooksActions} from '../state/books.actions';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private store: Store<{ books: Book[] }>, private httpClient: HttpClient) {
    this.loadBooks().subscribe(books => {
      this.store.dispatch(BooksActions.loaded({books: books}))
    });
  }

  public addBook(data: BookDataInterface): void {
    this.store.dispatch(BooksActions.add({book: Book.create(data)}));
  }

  public loadBooks(): Observable<Book[]> {
    return this.httpClient.get<BookDataInterface[]>('/assets/booklist.json')
      .pipe(
        map((items) => items.map(item => Book.create(item)))
      )
  }
}
