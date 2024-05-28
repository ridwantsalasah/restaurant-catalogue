import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
// eslint-disable-next-line no-unused-vars
import { createRestaurantItemTemplate } from '../templates/template-creator.js';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view.js';
import FavoriteRestaurantShowInitiator from './liked-restaurant/favorite-restaurant-show-initiator.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search.js';

const view = new FavoriteRestaurantView();

const favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        const hero = document.querySelector('hero-element');
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const content = document.querySelector('.content');
        const mainContent = document.querySelector('#main-content');
        const skipLink = document.querySelector('skip-to-main>a');

        skipLink.setAttribute('href', '#likeButton');
        mainContent.setAttribute('tabindex', '-1');

        hero.style.display = 'none';
        content.style.marginTop = '120px';
        new FavoriteRestaurantShowInitiator({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });

        content.style.minHeight = '50vh';
        // eslint-disable-next-line no-unused-expressions
        restaurants.length === 0 ? (content.style.height = '90vh') : content.style.height = 'auto';
    },
};

export default favorite;
