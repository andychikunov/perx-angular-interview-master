import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {TextFindDirective} from './directives/text-find.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    TextFindDirective
  ],
  entryComponents: [],
  providers: [],
  exports: [
    HeaderComponent,
    TextFindDirective
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule
  ]
})

export class SharedModule {
}
