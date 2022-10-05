import { Component, OnInit } from '@angular/core';
import { BookCrudService } from './../services/book-crud.service';


@Component({
  
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  
})


export class ListPage implements OnInit {
  
  Books: any = [];

  constructor( 
    private bookCrudService: BookCrudService  ) { }

  ngOnInit() {  }

  ionViewDidEnter() {
    this.bookCrudService.getBooks().subscribe((response) => {
      this.Books = response;
      console.log(response)
    })
  }

  removeBook(book) {
    if (window.confirm('Are you sure')) {
      this.bookCrudService.deleteBook(book.id)
      .subscribe(() => {
          this.ionViewDidEnter(); 
          console.log('Book deleted!')
        }
      )
    }
  }

}
