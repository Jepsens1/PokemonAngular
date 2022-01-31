import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { Pokemon } from '../pokemoninterface/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-pokemon-detai',
  templateUrl: './pokemon-detai.component.html',
  styleUrls: ['./pokemon-detai.component.css']
})
export class PokemonDetaiComponent implements OnInit {
  imagePath : any;
  pokemon: Pokemon | undefined;
  constructor(private route : ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) { this.imagePath = ''; }
  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pokemon => {
      this.imagePath = `assets/pokemonimage/${pokemon.name}.jpg` ,
      this.pokemon = pokemon;
    })
  }
  goBack(): void {
    this.location.back();
  }
}
