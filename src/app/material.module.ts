import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatTabsModule, MatIconModule, MatButtonModule,
  MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  declarations: []
})
export class MaterialModule {
}
