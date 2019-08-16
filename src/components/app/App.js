import Component from '../Components.js';
import Header from './Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
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