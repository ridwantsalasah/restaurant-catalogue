import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/main-components.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register.js';
import App from './views/app.js';

document.querySelector('#exp-btn').addEventListener('click', () => {
    const ExploreElement = document.querySelector('#main-content-restaurant');
    ExploreElement.scrollIntoView({ behavior: 'smooth' });
});

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigation-restaurant'),
    content: document.querySelector('main'),
    nav: document.querySelector('#navigation-restaurant>li>a'),
    FavNav: document.querySelector('.favorite-nav'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    app.renderPage();
    await swRegister();
});
