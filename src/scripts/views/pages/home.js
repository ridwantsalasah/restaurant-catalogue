import restaurantDbSource from '../../data/restaurantdb-source.js';
import '../../components/main-components.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const home = {
    async render() {
        return `
      <restaurant-list></restaurant-list>
    `;
    },

    async afterRender() {
        const restaurants = await restaurantDbSource.restaurantList();
        const restoList = document.querySelector('.lists');
        const skipLink = document.querySelector('skip-to-main>a');
        const hero = document.querySelector('hero-element');
        const mainContent = document.querySelector('#main-content');

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-content');
        restoList.innerHTML = '';
        hero.style.display = 'block';

        restaurants.forEach((restaurant) => {
            restoList.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default home;
