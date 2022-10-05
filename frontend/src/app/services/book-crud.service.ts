import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Book } from '../model/book';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class BookCrudService {

  endpoint = 'http://localhost:8080/books';


  constructor(private httpClient: HttpClient) { }

  createBook(book: Book): Observable<any> {
    let data = new URLSearchParams();
    data.append("name", book.name);
    data.append("author", book.author);
    data.append("editorial", book.editorial);
    data.append("img_url", book.img_url);

    return this.httpClient.post<Book>(this.endpoint, data, httpOptionsUsingUrlEncoded)
      .pipe(
        catchError(this.handleError<Book>('Error occured'))
      );
  }

  getBook(id): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Book fetched: ${id}`)),
        catchError(this.handleError<Book[]>(`Get book id=${id}`))
      );
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.endpoint)
      .pipe(
        tap(books => console.log('Books retrieved!')),
        catchError(this.handleError<Book[]>('Get book', []))
      );
  }

  updateBook(id, book: Book): Observable<any> {
    let data = new URLSearchParams();
    data.append("name", book.name);
    data.append("author", book.author);
    data.append("editorial", book.editorial);
    data.append("img_url", book.img_url);

    return this.httpClient.put(this.endpoint + '/' + id, data, httpOptionsUsingUrlEncoded)
      .pipe(
        tap(_ => console.log(`Book updated: ${id}`)),
        catchError(this.handleError<Book[]>('Update book'))
      );
  }

  deleteBook(id): Observable<Book[]> {
    return this.httpClient.delete<Book[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Book deleted: ${id}`)),
        catchError(this.handleError<Book[]>('Delete book'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
