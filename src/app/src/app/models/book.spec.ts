import { Book } from './book';
import {DateTime} from 'luxon';
import {BookDataInterface} from '../interfaces/book-data-interface';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('', '', '', DateTime.now())).toBeTruthy();
  });

  it('should create an instance through the create method', () => {
    expect(Book.create({
      uuid: '',
      title: '',
      author: '',
      pub_date: '2013-01-20'
    } as BookDataInterface)).toBeTruthy();
  });
});
