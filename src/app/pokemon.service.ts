import { Injectable } from '@angular/core';
import { Pokemon } from './pokemoninterface/pokemon';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
  getPokemons(): Observable<Pokemon[]> {
    this.http.get(`https://localhost:7077/GetAllPokemons`).subscribe(data => console.log(data));
    return this.http.get<Pokemon[]>('https://localhost:7077/GetAllPokemons')
      .pipe(
        tap(_ => this.log('fetched pokemon')),
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
  }
  getPokemon(id: number): Observable<Pokemon> {
    const url = `https://localhost:7077/GetPokemonDetailsFromID?id=${id}`;
    this.http.get(url).subscribe(data => console.log(data));
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }
  searchPokemons(term: string): Observable<Pokemon[]> {
    this.http.get(`https://localhost:7077/GetPokemon/?name=${term}`).subscribe(data => console.log(data));
    return this.http.get<Pokemon[]>(`https://localhost:7077/GetPokemon/?name=${term}`,this.httpOptions).pipe(tap(x => x.length ?
      this.log(`found pokemons matching "${term}"`): this.log(`no pokemons matching "${term}"`)), catchError(this.handleError<Pokemon[]>(`searchPokemons`)))
  }

  private log(message: string) {

  this.messageService.add(`PokemonService: ${message}`);
}
  private handleError<T>(operation = 'operation', result ?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
