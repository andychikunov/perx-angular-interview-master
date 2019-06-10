import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BooksTablePageComponent} from './books-table-page/books-table-page.component';
import {TextDirectivePageComponent} from './text-directive-page/text-directive-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    data: {
      showHeader: false
    }
  },
  {
    path: 'table',
    component: BooksTablePageComponent,
    data: {
      showHeader: true
    }
  },
  {
    path: 'directive',
    component: TextDirectivePageComponent,
    data: {
      showHeader: true
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
