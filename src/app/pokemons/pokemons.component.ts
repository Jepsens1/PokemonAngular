import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemoninterface/pokemon';
import { PokemonService } from '../pokemon.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(): void {
     this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

}
