import axios from "axios";
const conf = {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
    }};

export function getAllWords(callback, errorCallback){

    axios.get("/api/words", conf)
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

export function getWord(id, callback, errorCallback){

    axios.get(`/api/words/${id}`, conf)
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

export function addWord(name, callback, errorCallback) {

    axios.post(`/api/words/`,
        {
            name: name,
            userId: 1,
            isActive: true
        }, conf)
        .then(res => {
            //do something
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if (errorCallback != null) {
                errorCallback(err);
            }
        })
}

export function deleteWord(wordId, callback, errorCallback){

    axios.delete(`/api/words/${wordId}`, conf)
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