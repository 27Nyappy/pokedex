import PokeItem from '../src/components/pokemon/PokeItem.js';

const test = QUnit.test;

QUnit.module('Render Pokemon item');

test('renders html from data', assert => {
    const pokemon = {
        pokemon: 'charmander',
        type: 'fire',
        attack: 52,
        defense: 43
    };
    
    const expected = /*html*/`
        <li>
            <div class="poke-info">
                <span class="poke-name">${pokemon.pokemon}</span>
                <p>Type <span class="type-span">${pokemon.type_1} ${pokemon.type_2}</span> Attack <span class="attack-span">${pokemon.attack}</span> Defense <span class="defense-span">${pokemon.defense}</span></p>
            </div>
            <div class="poke-container">
                <img class="poke-image" src="${pokemon.url}" alt="${pokemon.pokemon} image">
            </div>
        </li>
        `;
    
    const props = { pokemon: pokemon };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();

    assert.htmlEqual(html, expected);
});