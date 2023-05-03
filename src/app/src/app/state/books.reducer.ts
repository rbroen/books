import {createReducer, on} from '@ngrx/store';
import {BooksActions} from './books.actions';
import {Book} from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.add, (state, {book}) => {
    return [...state, book];
  }),
  on(BooksActions.loaded, (state, {books}) => {
    return [...books];
  }),
);
