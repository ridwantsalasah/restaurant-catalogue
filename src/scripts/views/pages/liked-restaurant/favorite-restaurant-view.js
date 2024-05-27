import { createRestaurantItemTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantView {
    getTemplate() {
        return `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <div class="content">
                <div class="explore-restaurant">
                    <h1 class="content__label" id="main-content">Favorite Restaurants</h1>
                    <div class="filter-wrapper">
                        <div class="search-container">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id="searchInput" placeholder="Search by name...">
                        </div>
                    </div>   
                </div>
                <div class="lists" id="lists"></div>
            </div>
        `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('searchInput').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('lists').innerHTML = html;

        document.getElementById('lists').dispatchEvent(new Event('lists:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return `
        <div></div>
        <div class="restaurant-not-found">Tidak ada restoran</div>`;
    }
}

export default FavoriteRestaurantView;
