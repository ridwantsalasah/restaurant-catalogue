import FavoriteRestaurantShowInitiator from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-initiator.js';
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view.js';

describe('Showing all favorite restaurants', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurants have been liked', () => {
        it('should ask for the favorite restaurants', () => {
            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => []),
            };
            new FavoriteRestaurantShowInitiator({
                view,
                favoriteRestaurants,
            });
            expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
        });

        it('should show the information that no restaurants have been liked', (done) => {
            document.getElementById('lists').addEventListener('lists:updated', () => {
                expect(document.querySelectorAll('.restaurant-not-found').length).toEqual(1);
                done();
            });

            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => []),
            };

            new FavoriteRestaurantShowInitiator({
                view,
                favoriteRestaurants,
            });
        });
    });

    describe('When favorite restaurants exist', () => {
        it('should show the restaurants', (done) => {
            document.getElementById('lists').addEventListener('lists:updated', () => {
                expect(document.querySelectorAll('.restaurants-item').length).toEqual(2);
                done();
            });

            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => [{
                    id: 11,
                    city: 'C',
                    name: 'A',
                    rating: 3,
                    description: 'Sebuah restoran A',
                },
                {
                    id: 22,
                    city: 'D',
                    name: 'B',
                    rating: 4,
                    description: 'Sebuah restoran B',
                },
                ]),
            };

            new FavoriteRestaurantShowInitiator({
                view,
                favoriteRestaurants,
            });
        });
    });
});
