import {DateTime} from 'luxon';
import {BookDataInterface} from '../interfaces/book-data-interface';
import {v4 as Uuid} from 'uuid';

export class Book {

  constructor(private _uuid: string, private _title: string, private _author: string, private _pub_date: DateTime) {}

  get uuid(): string {
    return this._uuid;
  }

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get pub_date(): DateTime {
    return this._pub_date;
  }

  static create(data: BookDataInterface) {
    return new Book(
      data.uuid !== '' ? data.uuid : Uuid(),
      data.title,
      data.author,
      DateTime.fromISO(data.pub_date),
    );
  }
}
