import Component from '../Components.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header class="main-header">
                <img id="logo" src="./assets/pokeball_PNG19.png" alt="Pokeball logo">
                <h1>POKEDEX</h1>
            </header>
        `;
    }
}

export default Header;