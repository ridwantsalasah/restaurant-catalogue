import home from '../views/pages/home.js';
import favorite from '../views/pages/favorite.js';
import detail from '../views/pages/detail.js';

const routes = {
    '/': home,
    '/home': home,
    '/favorite': favorite,
    '/detail/:id': detail,
};

export default routes;
