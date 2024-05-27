import restaurantDbSource from '../../data/restaurantdb-source.js';
import UrlParser from '../../routes/url-parser.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import userReview from '../../utils/add-review.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

const detail = {
    async render() {
        return `
        <item-restaurant></item-restaurant>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await restaurantDbSource.DetailRestaurant(url.id);
        const hero = document.querySelector('hero-element');
        const RestoContainer = document.querySelector('.detail-container');
        const mainContent = document.querySelector('#main-content');
        const skipLink = document.querySelector('skip-to-main>a');

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#likeButton');

        hero.style.display = 'none';
        RestoContainer.innerHTML = '';
        RestoContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('.like-button'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
                city: restaurant.city,
                rating: restaurant.rating,
            },
        });

        const userReviewContainer = document.querySelector('.add-review');
        const nameInput = userReviewContainer.querySelector('.inputName');
        const reviewInput = userReviewContainer.querySelector('.inputDescription');

        userReviewContainer.addEventListener('submit', (event) => {
            event.preventDefault();

            userReview({
                url: url.id,
                name: nameInput.value,
                review: reviewInput.value,
            });

            userReviewContainer.reset();
        });
    },
};

export default detail;
