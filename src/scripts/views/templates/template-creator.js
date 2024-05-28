import CONFIG from '../../globals/config.js';

// eslint-disable-next-line no-unused-vars
const medium = 'medium/';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="restaurant-item-detail">
            <div class="restaurant-img-detail">
                <div class="button">
                    <div class="like-button"></div>
                </div>
        <picture>
            <source class="lazyload" media="(max-width: 600px)" data-srcset="${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}">
            <source class="lazyload" media="(max-width: 1200px)" data-srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
            <img class="restaurant-detail-image lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
        </picture>
            </div>
            <div class="restaurant-detail">
                <div class="restaurant-name-detail">${restaurant.name}</div>
                <p class="restaurant-rating-detail">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                <p class="address-detail"><i class="fa-solid fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p class="categories-detail">Kategori : <span>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</span></p>
                <p>Makanan : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</span>
                <p>Minuman : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</span>
            </div>
        </div>
        <div class="restaurant-desc">
            <div class="menu">Deskripsi :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="review">
        <h2>Review</h2>
        <div class="review-card">
            ${restaurant.customerReviews.map((review) => `
            <div class="item-review">
                <div class="item-reviewer">
                    <div class="reviewer-list">
                        <p>${review.name}</p>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="description-review">
                    <p>${review.review}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
    <hr>
    <form class="add-review">
        <h2>Add Review</h2>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" class="inputName" />
        <label for="review">Review</label>
        <textarea type="text" name="review" placeholder="Review" class="inputDescription"></textarea>
        <div class="submit">
            <button type="submit">Submit</button>
        </div>
    </form>
`;

const createSkeletonRestaurantDetail = () => {
    let template = '';

    template += `
        <div class="detail">
            <div class="restaurant-item-detail">
                <div class="restaurant-img-detail">
                    <img src="../../../public/images/placeholder.png" alt="skeleton">
                </div>
                <div class="restaurant-detail">
                    <div class="skeleton">Lorem ipsum</div>
                    <p class="skeleton">Lorem ipsum dolor sit amet</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                </div>
            </div>
            <div class="restaurant-desc">
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            </div>
        </div>
    `;
    return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurants-item" >
        <p class="location">Kota. ${restaurant.city || '-'}</p>
        <picture>
            <source class="lazyload" media="(max-width: 600px)" data-srcset="${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}">
            <source class="lazyload" media="(max-width: 1200px)" data-srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
            <img class="restaurant-item_image lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
        </picture>
        <div class="restaurant-item-content">
            <p class="restaurant-item-date">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating || '-'}</span></p>
            <h1 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h1>
            <p class="restaurant-item-description">${restaurant.description || '-'}</p>
        </div>
    </article>
`;

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <article class="restaurants-item" >
            <img class="restaurant-item_image " src="../../../public/images/placeholder.png" alt="skeleton" width="100%" height="350px">
            <div class="restaurant-item-content">
                <p class="skeleton">Lorem ipsum</p>
                <h1 class="skeleton">Lorem ipsum dolor sit amet</h1>
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
            </div>
        </article>
    `;
    }
    return template;
};

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;
export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
    createSkeletonRestaurantDetail,
    createSkeletonRestaurantTemplate,
};
