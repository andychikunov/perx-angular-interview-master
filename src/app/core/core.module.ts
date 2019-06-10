import {ModuleWithProviders, NgModule} from '@angular/core';
import {BooksService} from './services/books.service';

@NgModule({
  providers: []
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        BooksService
      ]
    };
  }
}
