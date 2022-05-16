import Home from '../views/HomePage';
import SignIn from '../views/SignIn';
import MapApp from '../views/MapApp';
import RegisterUp from '../views/RegisterUp';

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/register', component: RegisterUp },
    { path: '/mapapp', component: MapApp },
];

export default routes;
