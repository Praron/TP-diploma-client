import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LOG_IN} from '../../constants/routes-map.constant';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                rest.isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={LOG_IN}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
