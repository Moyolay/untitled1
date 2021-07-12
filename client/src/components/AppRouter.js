import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {AuthRoutes, PublicRoutes} from "../Routes";
import {AUTH_ROUTE} from "../utils/Consts";
import {Context} from "../index";


const AppRouter = () => {
    //const {user} = useContext(Context);
    const isAuth = true;
    return (
        <Switch>
            {isAuth && AuthRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {PublicRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to={AUTH_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
