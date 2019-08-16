import Component from '../Components.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
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
    }
}

export default PokeItem;