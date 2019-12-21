import axios from "axios";
const conf = {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
    }};

export function getAllUsers( callback, errorCallback){
    axios.get("/api/users", conf)
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

export function getUser(id, callback, errorCallback){

    axios.get(`/api/users/${id}`, conf)
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