import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data;
  columnas: string[] = [ 'photo', 'name', 'option' ];

  datos = [ ];

  @ViewChild(MatTable) tabla1!: MatTable<string>;
  constructor( private router: Router ) { }

  ngOnInit(): void {
    if(this.data.length > 0) {
      this.datos = this.data;
    }
  }

  getDetail( hero : any ): void {
    this.router.navigate(['detail', hero.id]);
  }

}
