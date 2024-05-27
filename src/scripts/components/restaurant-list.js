import { createSkeletonRestaurantTemplate } from '../views/templates/template-creator.js';

class RestaurantList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <div class="content-restaurants">
                <h1 class="content-label" id="main-content-restaurant">Explore Restaurants</h1>
                <div class="lists">
                ${createSkeletonRestaurantTemplate(15)}
                </div>
            </div>
        `;
    }
}
customElements.define('restaurant-list', RestaurantList);
