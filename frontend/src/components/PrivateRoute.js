import React from 'react';
import { Route, Redirect} from "react-router-dom";
import LoginPage from "./LoginPage";

const PrivateRoute = ({component: Component, state, updateAppState, rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(state.isLoading) {
                    return <h2>Loading...</h2>

                } else if (Component === LoginPage) {
                    return <Component {...props} state = {state} updateAppState = {updateAppState}/>
                } else {
                    return <Component {...props} state = {state} updateAppState = {updateAppState}/>
                }
            }}

        />
    )
};

export default (PrivateRoute);
