import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from '../pokemoninterface/pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemons$!: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();
  constructor(private pokemonService: PokemonService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  SubmitResult(): void {
    this.pokemonService.searchPokemons("bulbasaur").subscribe(x => {

    })
  };
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    );
  }

}
