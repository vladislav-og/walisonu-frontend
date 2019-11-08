import axios from "axios";
// const HOST = "http://127.0.0.1:8000/api";
const HOST = "http://174.129.108.32:8000/api";

export function getAllUsers(config, callback, errorCallback){
    axios.get(HOST + "/users", config)
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

    axios.get(HOST + `/users/${id}`, config)
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