import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { PokemonPageComponent } from './pokemon/components/pokemon-page.component';

@Component({
  selector: 'app-root',
  imports: [PokemonPageComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = VERSION.full;
  prs = [
    'https://github.com/angular/angular/pull/60919',
  ];
  name = 'Resource API updates';
  description = 'RxResource uses stream to strem Pokemons';
}
