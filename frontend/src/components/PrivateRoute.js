import React from 'react';
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, state: state, rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(state.isLoading) {
                    return <h2>Loading...</h2>
                } else if (!state.isAuthenticated) {
                    console.log('redirect')
                    return <Redirect to={{pathname: "/login", state: state}}/>
                } else {
                    return <Component {...rest} {...props}/>
                }
            }}

        />
    )
};

export default (PrivateRoute);
