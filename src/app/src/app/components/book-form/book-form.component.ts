import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Book} from '../../models/book';
import {BookDataInterface} from '../../interfaces/book-data-interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Input()
  public book!: Book

  @Output()
  public handleSubmit = new EventEmitter<BookDataInterface>();

  @Output()
  public handleCancel = new EventEmitter<null>();

  public formObject!: UntypedFormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const book = this.book;
    this.formObject = this.formBuilder.group({
      title: [this.book.title, [Validators.required]],
      author: [this.book.author, [Validators.required]],
      pub_date: [this.book.pub_date, [Validators.required]],
    });
  }

  public processSubmit(event: any) {
    console.warn("Bob says BookFormComponent processSubmit", event, this.formObject);
    if (this.formObject.valid) {
      const values = this.formObject.value;
      this.handleSubmit.emit({
        ...this.book,
        ...values,
      });
    }
  }

  public onChancel() {
    this.handleCancel.emit(null);
  }
}
