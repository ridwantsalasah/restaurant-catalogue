const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#searchInput');
    I.see('Tidak ada restoran', '.restaurant-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran', '.restaurant-not-found');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.restaurant-name a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-name').first());

    I.click(locate('.restaurant-name a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurants-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran', '.restaurant-not-found');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.restaurant-name a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-name').first());

    I.click(locate('.restaurant-name a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurants-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.click('.restaurant-name a');
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const FavoriteRestaurantIsEmpty = await I.grabTextFrom('.restaurant-not-found');
    assert.strictEqual('Tidak ada restoran', FavoriteRestaurantIsEmpty);
});

Scenario('Add Review', async ({ I }) => {
    I.see('Tidak ada restoran', '.restaurant-not-found');

    I.amOnPage('/');

    I.seeElement('.restaurant-name a');
    I.click(locate('.restaurant-name a').first());

    I.waitForElement('.add-review', 5);
    I.seeElement('.add-review');

    const textReview = 'Testing e2e';
    const outputTextReview = 'Testing e2e';
    I.fillField('input', 'Semoga Sukses');
    I.fillField('textarea', textReview);

    I.click('button[type="submit"]');

    I.waitForElement('.description-review p', 10);
    I.seeElement('.description-review p');

    const lastReview = locate('.description-review p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);

    assert.strictEqual(outputTextReview, lastReviewText);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restoran', '.restaurant-not-found');

    I.amOnPage('/');

    I.seeElement('.restaurant-name a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-name').first());

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.restaurant-name a').at(i));
        I.waitForElement('#likeButton', 3);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#searchInput');

    const searchQuery = firstRestaurantName.substring(0, 3);

    I.fillField('#searchInput', searchQuery);
    I.pressKey('Enter');
    I.waitForElement('.restaurants-item', 3);

    const visibleLikedRestaurants = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(visibleLikedRestaurants, firstRestaurantName);
});