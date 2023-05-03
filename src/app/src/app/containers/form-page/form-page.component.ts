import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {DateTime} from 'luxon';
import {Router} from '@angular/router';
import {BookDataInterface} from '../../interfaces/book-data-interface';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public book!: Book;

  constructor(private routerService: Router, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.book = new Book('', '', '', DateTime.fromISO('2000-01-01'));
  }

  public addBook(bookData: BookDataInterface) {
    console.warn("Bob says FormPageComponent addBook", bookData);
    this.bookService.addBook(bookData);
    this.navigateToList();
  }

  public navigateToList() {
    this.routerService.navigate(['/']);
  }
}
