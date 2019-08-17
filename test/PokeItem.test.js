import PokeItem from '../src/components/pokemon/PokeItem.js';

const test = QUnit.test;

QUnit.module('Render Pokemon item');

test('renders html from data', assert => {
    const poke = {
        pokemon: 'charmander',
        type: 'fire',
        attack: 52,
        defense: 43
    };
    
    const expected = /*html*/`
        <li>
            <div class="poke-info">
                <span class="poke-name">${poke.pokemon}</span>
                <p>Type <span class="type-span">${poke.type_1} ${poke.type_2}</span> Attack <span class="attack-span">${poke.attack}</span> Defense <span class="defense-span">${poke.defense}</span></p>
            </div>
            <div class="poke-container">
                <img class="poke-image" src="${poke.url}" alt="${poke.pokemon} image">
            </div>
        </li>
        `;
    
    const props = { poke: poke };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();

    assert.htmlEqual(html, expected);
});