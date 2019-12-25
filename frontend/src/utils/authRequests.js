import axios from "axios";

export function getCurrentUser(callback, errorCallback) {

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
            if(callback != null){
                callback(res);
            }
        }).catch(err => {
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