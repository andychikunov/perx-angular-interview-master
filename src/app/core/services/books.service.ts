import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../api-config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<any> {
    return this.http.get(ApiConfig.books);
  }
}
