import Component from '../Components.js';

class PokeItem extends Component {
    renderHTML() {
        const poke = this.props.poke;

        return /*html*/`
            <li>
                <div class="poke-info">
                    <span class="poke-name">${poke.pokemon}</span>
                    <p class="poke-stuff">Type <span class="type-span">${poke.type_1} ${poke.type_2}</span> Attack <span class="attack-span">${poke.attack}</span> Defense <span class="defense-span">${poke.defense}</span></p>
                </div>
                <div class="poke-img-container">
                    <img class="poke-image" src="${poke.url_image}" alt="${poke.pokemon} image">
                </div>
            </li>
        `;
    }
}

export default PokeItem;