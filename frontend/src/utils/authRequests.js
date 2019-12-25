import axios from "axios";

export function getCurrentUser(callback, errorCallback) {
    console.log("get user data");

    console.log('Bearer ' + localStorage.getItem("ACCESS_TOKEN"));
    if (localStorage.getItem("ACCESS_TOKEN")) {
        axios.get('api/users/me', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
            }
        }).then(res => {
            if (callback != null) {
                callback(res);
            }
        }).catch(err => {
            if (errorCallback != null) {
                errorCallback(err);
            }
        });
    }
}

export function register(data, callback, errorCallback) {
    axios.post('api/users/register', data)
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
    axios.post('api/users/login', data)
        .then(res => {
            if(callback != null){
                callback(res);
            }
        }).catch(err => {
        if(errorCallback != null){
            errorCallback(err);
        }
    })
}

export function logout(callback, errorCallback) {
    axios.post('api/logout',{}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
            }
        })
        .then(res => {
            if(callback != null){
                callback(res);
            }
        }).catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
    })
}