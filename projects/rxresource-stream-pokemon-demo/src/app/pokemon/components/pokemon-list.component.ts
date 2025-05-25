import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { scan } from 'rxjs';
import { Pokemon } from '../types/pokemon.type';
import { PokemonRowComponent } from './pokemon-row.component';

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
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  pokemons = input.required<Pokemon[]>();

  pokemonList$ = toObservable(this.pokemons)
    .pipe(
      scan((acc, newPokemons) => newPokemons ? acc.concat(newPokemons) : acc, 
      [] as Pokemon[]),
    );

  pokemonStreamResource = rxResource({
    stream: () => this.pokemonList$
  });

  pokemonList = computed(() => this.pokemonStreamResource.hasValue() ? 
    this.pokemonStreamResource.value() : []
  );
}

