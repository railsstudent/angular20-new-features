import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-row',
  imports: [],
  templateUrl: './pokemon-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonRowComponent {
  pokemon = input.required<Pokemon>({ alias: 'result' });
}

