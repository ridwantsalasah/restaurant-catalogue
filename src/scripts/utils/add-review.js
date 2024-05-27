import RestaurantDbSource from '../data/restaurantdb-source.js';
import cardReviewer from '../components/add-review.js';

const userReview = async ({ url, name, review }) => {
    const userInputData = {
        id: url,
        name,
        review,
    };

    const reviewerContainer = document.querySelector('.review-card');
    const restaurant = await RestaurantDbSource.UserReviewRestaurant(userInputData);
    reviewerContainer.innerHTML = restaurant.customerReviews.map((reviewData) => cardReviewer(reviewData)).join('');
};

export default userReview;
