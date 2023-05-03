import {createActionGroup, props} from '@ngrx/store';
import {Book} from '../models/book';

export const BooksActions = createActionGroup({
  source: 'books',
  events: {
    add: props<{ book: Book }>(),
    loaded: props<{ books: ReadonlyArray<Book> }>(),
  }
});
