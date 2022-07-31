import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heros: Hero[] = [];
  requestSend: boolean = false;

  constructor( private hservice: HeroService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let query = this.acRoute.snapshot.queryParams.q;
    if(query){
      this.getHerosByParams(query);
    }

  }

  getHerosByParams( query: string ): void {
    this.requestSend = true;
    this.hservice.getListByTerms( query ).toPromise().then( (heroList: any) => { 
      if(heroList && heroList.data && heroList.data.results && heroList.data.results.length > 0) {
        let heros = heroList.data.results;
        this.heros = this.heros.concat( heros.map( (item: any) => {
          return { 
            id: item.id, 
            name: item.name,
            description: item.description,
            photo: item.thumbnail.path + '/portrait_small.' + item.thumbnail.extension } 
        }))
      }
      this.requestSend = false;
    }).catch( err => {
      this.requestSend = false;
    })
  }

  goBack() {
    let value = this.acRoute.snapshot.queryParams.q;
    this.router.navigate([ 'list' ], { queryParams: { q: value || '' } })
  }
}
