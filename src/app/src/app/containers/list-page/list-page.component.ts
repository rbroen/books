import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, tap} from 'rxjs';
import {Book} from '../../models/book';
import {BookService} from '../../services/book.service';
import {DateTime} from 'luxon';
import {Store} from '@ngrx/store';
import {allBookSelector} from '../../state/books.selectors';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {

  public displayedColumns: string[] = ['title', 'author', 'pub_date'];

  public currentPage = new BehaviorSubject<number>(0);
  public totalNumberOfItems: Observable<number>;

  private books: Observable<readonly Book[]>;
  public booksToShow: Observable<readonly Book[]>;

  protected readonly DateTime = DateTime;

  public useDesktopLayout = new BehaviorSubject<boolean>(window.innerWidth >= 980);

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    this.useDesktopLayout.next(event.target.innerWidth >= 980);
  }

  constructor(private bookService: BookService, private store: Store<{ books: Book[] }>) {
    this.books = this.store.select(allBookSelector);
    this.totalNumberOfItems = this.books.pipe(
      map((books) => books.length)
    );
    this.booksToShow = combineLatest([this.books, this.currentPage]).pipe(
      map(([books, currentPage]) => books.slice(currentPage * 10, (currentPage + 1) * 10))
    );
  }

  public handlePageEvent($event: PageEvent) {
    if ($event.pageIndex !== this.currentPage.getValue()) {
      this.currentPage.next($event.pageIndex);
    }
    if ($event.pageIndex !== this.currentPage.getValue()) {
      this.currentPage.next($event.pageIndex);
    }
  }
}
