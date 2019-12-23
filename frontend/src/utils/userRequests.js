import axios from "axios";


export function getAllUsers( callback, errorCallback){
    axios.get("/api/users", {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
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

    axios.get(`/api/users/${id}`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
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