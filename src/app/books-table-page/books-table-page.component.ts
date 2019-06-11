import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {BooksService} from '../core/services/books.service';
import {map} from 'rxjs/operators';

export interface BookItemInterface {
  content: string;
  cover: string;
  link: string;
  created: string;
  updated: string;
}

@Component({
  selector: 'perx-books-table-page',
  templateUrl: './books-table-page.component.html',
  styleUrls: ['./books-table-page.component.scss']
})
export class BooksTablePageComponent implements OnInit {

  public displayedColumns = ['content', 'cover', 'created', 'updated'];
  public dataSource = new MatTableDataSource<BookItemInterface>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
    this.dataSource.sort = this.sort;
  }

  public getBooks() {
    this.booksService.getBooks()
      .pipe(
        map( response => {
          return response.data.map( item => {
            return {
              content: item.attributes.content,
              cover: item.attributes.display_properties.image,
              link: item.links.self,
              created: item.attributes.created_at,
              updated: item.attributes.updated_at
            } as BookItemInterface;
            }
          );
        })
      )
      .subscribe((res: BookItemInterface[]) => {
        this.dataSource.data = res;
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
