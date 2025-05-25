import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, delay, forkJoin, map, mergeMap, Observable, of } from "rxjs";
import { PokemonPageUrlType } from "../types/pokemon-page.type";
import { PokemonPageType, PrePokemon } from "../types/pokemon.type";

@Injectable({
  providedIn: 'root'
})
export class PokemonPageService {
  private readonly http = inject(HttpClient);

  paginate(url: string): Observable<PokemonPageType> {
    return this.http.get<PokemonPageUrlType>(url).pipe(
      mergeMap((res) => {
        const pokemonUrls = res.results.map(({ url }) => url);
        const pokemons$ = pokemonUrls.map((pokemonUrl) => 
          this.http.get<PrePokemon>(pokemonUrl)
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
                }))
              })),
              delay(500),
              catchError(() => of(undefined))
            )
        )
        return forkJoin(pokemons$).pipe(
          map((pokemons) => 
            pokemons.filter((pokemon) => !!pokemon)
          ),
          map((results) => ({ ...res, results }))
        )
      })
    )
  }
}