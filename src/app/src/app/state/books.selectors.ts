import {Book} from '../models/book';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const allBooksFeatureSelector = createFeatureSelector<ReadonlyArray<Book>>('books');

export const allBookSelector = createSelector(allBooksFeatureSelector, (books) => {
  return books;
})

export const Selector = {
  allBookSelector
}
