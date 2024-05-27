import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
import './pages/home.js';

class App {
    constructor({
        button, drawer, content, nav, FavNav,
    }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._nav = nav;
        this._favNav = FavNav;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            nav: this._nav,
            FavNav: this._favNav,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElem = document.querySelector('.skip-link-main');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#main-content').focus();
        });
    }
}

export default App;
