import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, delay, from, map, mergeMap, Observable, of, reduce } from "rxjs";
import { PokemonPageUrlType } from "../types/pokemon-page.type";
import { Pokemon, PrePokemon } from "../types/pokemon.type";

@Injectable({
  providedIn: 'root'
})
export class PokemonPageService {
  private readonly http = inject(HttpClient);

  paginate(url: string) {
    return this.http.get<PokemonPageUrlType>(url);
  }

  private retrievePokemonByUrl(url: string): Observable<Pokemon | undefined> {
    return this.http.get<PrePokemon>(url)
      .pipe(
        map((p) => ({
          ...p,
          types: p.types.map(({ slot, type }) => ({
            slot,
            name: type.name,
          })),
          stats: p.stats.map(({ base_stat, stat }) => ({
            base_stat,
            name: stat.name
          })),
          url: p.sprites.front_default || '',
        })),
        catchError((e) => { 
          console.error(e);
          return of(undefined)
        })
      );
  }

  concurrentPokemons(urls: string[], concurrent=3) {
    const pokemonList = [] as Pokemon[];

    if (!urls || urls.length <= 0) {
      return of(pokemonList);
    }

    return from(urls).pipe(
      mergeMap((url) => this.retrievePokemonByUrl(url), concurrent),
        delay(800),
        reduce((acc, pokemon) => pokemon ? acc.concat(pokemon) : acc, 
        [] as Pokemon[]),
      );
  }
}