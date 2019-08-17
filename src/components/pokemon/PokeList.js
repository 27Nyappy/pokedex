import Component from '../Components.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    onRender(dom) {
        const multiPoke = this.props.pokemon;

        multiPoke.forEach(poke => {
            const props = { poke: poke };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="multi-poke"></ul>
        `;
    }
}

export default PokeList;