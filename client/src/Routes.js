import {ADMIN_ROUTE, AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, START_ROUTE} from "./utils/Consts";
import Admin from "./pages/Admin";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import StartPage from "./pages/StartPage";


export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin,
    },
    {
        path: REGISTRATION_ROUTE,
        component: "Nothing",
    },
    {
        path: MAIN_ROUTE,
        component: MainPage,
    },
    {
        path: AUTH_ROUTE,
        component: Auth,
    }
]

export const PublicRoutes = [
    {
        path: AUTH_ROUTE,
        component: Auth,
    },
    {
        path: START_ROUTE,
        component: StartPage,
    }
]
