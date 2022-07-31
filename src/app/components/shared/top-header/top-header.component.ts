import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
  }

  goToHome() {
    this.router.navigate(['/'])
  }
}
