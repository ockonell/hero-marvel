import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero, DEFAULT_HERO } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = DEFAULT_HERO;
  requestSend: boolean = false;

  constructor( private hService: HeroService, private acRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    let idHero = this.acRoute.snapshot.params.id;
    if(idHero){
      this.getHeroDetails(idHero);
    }
  }

  getHeroDetails( idHero: string ): void {
    this.requestSend = true;
    this.hService.getDetails( idHero ).toPromise().then( (heroDetails: any) => {
      this.hero.id = heroDetails.data.results[0].id;
      this.hero.name = heroDetails.data.results[0].name || '';
      this.hero.description = heroDetails.data.results[0].description || '';
      this.hero.photo = heroDetails.data.results[0].thumbnail.path + '/portrait_small.' + heroDetails.data.results[0].thumbnail.extension || '';
      this.requestSend = false;
    }).catch( err => {
      this.requestSend = false;
    })
  }
}
