import FilterPokemonType from '../src/components/options/FilterPokemonType.js';
import { getPokemon } from '../src/services/pokemon-api.js';

const test = QUnit.test;

QUnit.module('Render Filtered Pokemon');

test('renders html from data', async(assert) => {
    const expected = /*html*/`
        <select class="filter">
            <option value="all">All Pokemon</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="fire">fire</option>
            <option value="flying">flying</option>
            <option value="grass">grass</option>
            <option value="normal">normal</option>
            <option value="poison">poison</option>
            <option value="water">water</option>
        </select>
        `;

    const pokemon = await getPokemon();

    const filterPokemonType = new FilterPokemonType({ pokemon: pokemon });
    const html = filterPokemonType.renderHTML();

    assert.htmlEqual(html, expected);
});