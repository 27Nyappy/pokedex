import Component from '../Components.js';

class FilterPokemonType extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    
    renderHTML() {
        const { pokemon } = this.props;
        const types = getTypes(pokemon.results);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
            <select class="filter">
                <option value="all">All Pokemon</option>
                ${optionsHTML}
            </select>
        `;
    }
}

function getTypes(pokemon) {
    const types = [];
    pokemon.forEach(poke => {
        if(!types.includes(poke.type_1)) {
            types.push(poke.type_1);
        }
        if(!types.includes(poke.type_2) && poke.type_2 !== 'NA') {
            types.push(poke.type_2);
        }
    });
    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type => {
        return /*html*/`
            <option value="${type}">${type}</option>
        `;
    });
    return optionsArray.join('');

}

export default FilterPokemonType;