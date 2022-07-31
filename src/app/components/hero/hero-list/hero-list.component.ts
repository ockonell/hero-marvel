import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heros: Hero[] = [];
  requestSend: boolean = false;

  constructor( private hservice: HeroService ) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.requestSend = true;
    this.hservice.getList().toPromise().then( (heroList: any) => { 
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
}
