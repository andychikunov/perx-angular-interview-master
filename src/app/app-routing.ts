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
      hideHeader: true
    }
  },
  {
    path: 'table',
    component: BooksTablePageComponent
  },
  {
    path: 'directive',
    component: TextDirectivePageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
