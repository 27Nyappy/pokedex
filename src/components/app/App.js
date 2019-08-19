import Component from '../Components.js';
import Header from './Header.js';
import PokeList from '../pokemon/PokeList.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import { pokemon } from '../../services/pokemon-api.js';
import hashStorage from '../../services/hash-storage.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const options = dom.querySelector('.options');
        const search = new Search();
        options.appendChild(search.renderDOM());

        const pokeDispList = dom.querySelector('.poke-disp-list');
        
        const paging = new Paging();
        pokeDispList.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        pokeDispList.appendChild(pokeList.renderDOM());



        function loadPokeList() {
            const options = hashStorage.get();
            pokemon(options)
                .then(data => {
                    const pokemon = data.results;
                    const totalCount = data.count;

                    pokeList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadPokeList();

        window.addEventListener('hashchange', () => {
            loadPokeList();
        });     

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