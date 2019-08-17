import Component from '../Components.js';
import Header from './Header.js';
import PokeList from '../pokemon/PokeList.js';
import FilterPokeType from '../options/FilterPokemonType.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import { getPokemon } from '../../services/pokemon-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const options = dom.querySelector('.options');
        const search = new Search();
        options.appendChild(Paging.renderDOM());

        const filterPokeTypeProps = {
            pokemon: pokemon,
            onFilter: (pokeType) => {
                let filteredTypes;
                if(pokeType === 'all') {
                    filteredTypes = pokemon;
                }
                else {
                    filteredTypes = pokemon.filtered(poke => {
                        return poke.type === pokeType;
                    });
                }
                const updateProps = { pokemon: filteredTypes };
                pokeList.update(updateProps);
            } 
        };
        const filterPokeType = new FilterPokeType(filterPokeTypeProps);
        const filterPokeTypeDOM = filterPokeType.renderDOM();

    }
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options">
                    </section>

                    <section class="poke-disp-list">
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;