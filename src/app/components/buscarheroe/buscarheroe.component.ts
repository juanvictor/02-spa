import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-buscarheroe',
    templateUrl: './buscarheroe.component.html',
    styleUrls: ['./buscarheroe.component.css']
})
export class BuscarheroeComponent implements OnInit {

    heroes: Heroe[] = [];
    termino: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router:Router,
        private _heroesService:HeroesService
    ) {
        this.activatedRoute.params.subscribe( params => {
            this.heroes = this._heroesService.buscarHeroes( params['id'] );
            this.termino = params['id'];

            console.log( this.heroes );
        })
    }

    ngOnInit() {
    }

    verHeroe( idx:number ){
        this.router.navigate( ['/heroe', idx] );
        // console.log(idx);
    }

}
