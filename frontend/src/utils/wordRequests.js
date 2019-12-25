import axios from "axios";


export function getAllWords(callback, errorCallback){

    axios.get("/api/words", {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
        .then(res => {

            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}

export function getWord(id, callback, errorCallback){

    axios.get(`/api/words/${id}`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
        .then(res => {
            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}

export function addWord(name, callback, errorCallback) {

    axios.post(`/api/words/`,
        {
            name: name,
            userId: 1,
            isActive: true
        }, {headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
            }})
        .then(res => {
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            if (errorCallback != null) {
                errorCallback(err);
            }
        })
}

export function deleteWord(wordId, callback, errorCallback){

    axios.delete(`/api/words/${wordId}`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
        .then(res => {

            if(callback != null){
                callback(wordId);
            }
        })
        .catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}