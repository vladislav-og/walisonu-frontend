import React from 'react';
import { Route, Redirect} from "react-router-dom";
import LoginPage from "./LoginPage";

const PrivateRoute = ({component: Component, state, updateAuthState, updateUserState, rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(state.isLoading) {
                    return <h2>Loading...</h2>

                } else if (Component === LoginPage) {
                    return <Component {...props} state = {state} updateAuthState = {updateAuthState} updateUserState = {updateUserState}/>
                } else if (!state.isAuthenticated) {
                    console.log('redirect to Login');
                    return <Redirect to="/login" state = {state} updateAuthState = {updateAuthState} updateUserState = {updateUserState}/>
                } else {
                    return <Component {...props} state = {state} updateAuthState = {updateAuthState} updateUserState = {updateUserState}/>
                }
            }}

        />
    )
};

export default (PrivateRoute);
