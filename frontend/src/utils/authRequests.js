import axios from "axios";

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    /*
    * Get user if authenticated
    *
    */
}