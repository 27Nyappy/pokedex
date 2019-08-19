import Component from '../Components.js';
import hashStorage from '../../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');
            const filterType = formData.get('filter-type');
            const filterAttack = formData.get('filter-attack');
            const filterDefense = formData.get('filter-defense');

            hashStorage.set({ 
                search: search,
                filterType: filterType,
                filterAttack: filterAttack,
                filterDefense: filterDefense,
                page: 1
            });
        });

        const searchInput = form.querySelector('[name="search"]');
        const filterTypeInput = form.querySelector('[name="filter-type"]');
        const filterAttackInput = form.querySelector('[name="filter-attack"]');
        const filterDefenseInput = form.querySelector('[name="filter-defense"]');

        window.addEventListener('hashchange', () => {
            searchInput.value = hashStorage.get().search || '';
            filterTypeInput.value = hashStorage.get().filterType || '';
            filterAttackInput.value = hashStorage.get().filterAttack || '';
            filterDefenseInput.value = hashStorage.get().filterDefense || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';
        const filterType = hashStorage.get().filterType || '';
        const filterAttack = hashStorage.get().filterAttack || '';
        const filterDefense = hashStorage.get().filterDefense || '';

        return /*html*/`
            <form>
                <fieldset>
                    <legend>SEARCH & FILTER</legend>
                    <div class="poke-ms-container">
                        <p>POKEMON NAME</p>
                        <input class="name-search-input" type="text" name="search" value="${search}">
                        <button class="nsb">GET POKEMON</button>
                    </div>

                    <div class="poke-ts-container">
                        <p>TYPE</p>
                        <input class="filter-type-input" type="text" name="filter-type" value="${filterType}">
                        <button class="tsb">SEARCH TYPE</button>
                    </div>

                    <div class="poke-as-container">
                        <p>ATTACK STATS</p>
                        <input class="filter-attack-input" type="number" name="filter-attack" value="${filterAttack}">
                        <button class="asb">SEARCH</button>
                    </div>

                    <div class="poke-ds-container">
                        <p>DEFENSE STATS</p>
                        <input class="filter-defense-input" type="number" name="filter-defense" value="${filterDefense}">
                        <button class="dsb">SEARCH</button>
                    </div>
                </fieldset>     
            </form>
        `;
    }

}

export default Search;