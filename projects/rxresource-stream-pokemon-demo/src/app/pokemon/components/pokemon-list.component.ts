import { ChangeDetectionStrategy, Component, computed, input, ResourceRef } from '@angular/core';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { scan, tap } from 'rxjs';
import { PokemonRowComponent } from './pokemon-row.component';
import { Pokemon } from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonRowComponent],
  template: `
    @if (pokemonList()) {
      <h2>Pokemon List ({{ pokemonList().length }})</h2>
      @for (result of pokemonList(); track result.name) {
        <app-pokemon-row [result]="result" />
        <hr />
      } @empty {
        <p>No Pokemon</p>
      }
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  pokemonsResource = input.required<ResourceRef<Pokemon | undefined>>();

  pokemonPagination = computed(() => this.pokemonsResource().hasValue() ? 
    this.pokemonsResource().value() : undefined
  );

  pokemonsPagination$ = toObservable(this.pokemonPagination)
    .pipe(
      tap((p) => console.log('Pokemon:', p?.id)),
      scan((acc, paginatedResult) => paginatedResult ? acc.concat(paginatedResult) : acc, 
      [] as Pokemon[]),
    );

  pokemonStreamResource = rxResource({
    stream: () => this.pokemonsPagination$
  });

  pokemonList = computed(() => this.pokemonStreamResource.hasValue() ? 
    this.pokemonStreamResource.value() : []
  );
}

