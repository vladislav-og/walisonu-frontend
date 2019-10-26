import axios from "axios";

export function getAllWords(config, callback, errorCallback){

    axios.get("http://127.0.0.1:8000/api/words", config)
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

export function getWord(id, config, callback, errorCallback){

    axios.get(`http://127.0.0.1:8000/api/words/${id}`, config)
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

export function addWord(name, config, callback, errorCallback) {

    axios.post(`http://127.0.0.1:8000/api/words/`,
        {
            name: name,
            user_id: 1,
            isActive: true
        }, config)
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

    axios.delete(`http://127.0.0.1:8000/api/words/${wordId}`)
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