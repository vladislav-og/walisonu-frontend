import React from 'react';
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, state: state}) => {
    return (
        <Route
            render={props => {
                if(state.isLoading) {
                    return <h2>Loading...</h2>
                } else if (!state.isAuthenticated) {
                    return <Redirect to="/login"/>
                } else {
                    return <Redirect to="/"/>
                }
            }}

        />
    )
};

export default (PrivateRoute);
