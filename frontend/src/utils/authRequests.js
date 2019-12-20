import axios from "axios";

export function getCurrentUser(callback, errorCallback) {
    console.log("get user data");
    // if(!localStorage.getItem("ACCESS_TOKEN")) {
    //     console.log("no token")
    //     errorCallback("No access token set.");
    // }

    console.log('Bearer ' + localStorage.getItem("ACCESS_TOKEN"));
    axios.get('api/users/me', {"Access-Control-Allow-Origin": "*", headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }}).then(res => {
            if (callback != null) {
                callback(res);
            }
        }).catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
        });
}

export function register(data, callback, errorCallback) {
    axios.post('api/users/register',
        data,
        {"Access-Control-Allow-Origin": "*"})
        .then(res => {
            //do something
            if(callback != null){
                callback(res);
            }
        }).catch(err => {
        // catch error
        if(errorCallback != null){
            errorCallback(err);
        }
    })

}

export function login(data, callback, errorCallback) {
    axios.post('api/users/login',
        data,
        {"Access-Control-Allow-Origin": "*"})
        .then(res => {
            //do something
            if(callback != null){
                callback(res);
            }
        }).catch(err => {
        // catch error
        if(errorCallback != null){
            errorCallback(err);
        }
    })
}