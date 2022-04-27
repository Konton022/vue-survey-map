import Home from './views/HomePage';
import SignIn from './views/SignIn';
import MapApp from './views/MapApp';

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/mapapp', component: MapApp },
];

export default routes;
