import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { InputSearchComponent } from './input-search/input-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableComponent, InputSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    TableComponent, InputSearchComponent
  ]
})
export class UtilitiesModule { }
