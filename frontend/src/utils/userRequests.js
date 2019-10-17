import axios from "axios";

export function getAllUsers(config, callback, errorCallback){
    axios.get("http://127.0.0.1:8000/api/users", config)
        .then(res => {
            //do something

            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}

export function getUser(id, config, callback, errorCallback){

    axios.get(`http://127.0.0.1:8000/api/users/${id}`, config)
        .then(res => {
            //do something
            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}