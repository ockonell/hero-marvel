import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  query: string = '';
  @ViewChild( 'input' ) InputRef: ElementRef;

  constructor(private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.acRoute.snapshot.queryParams.q;
  }

  submit( event: KeyboardEvent, value: string ) {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();

      this.router.navigate( [ 'search' ], { queryParams: { q: value || '' } } );
    }
  }

  ngAfterViewInit() {
    this.InputRef.nativeElement.value = this.query || '';
  }
}
