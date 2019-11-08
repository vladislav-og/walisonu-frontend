import axios from "axios";
axios.defaults.headers.delete['Content-Type'] ='application/json';
// const HOST = "http://127.0.0.1:8000/api";
const HOST = "http://174.129.108.32:8000/api";

export function getAllSynonyms(config, callback, errorCallback){
    axios.get(HOST + "/synonyms", config)
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

export function getWordSynonyms(id, config, callback, errorCallback){
    axios.get(HOST + `/synonyms/${id}`, config)
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

export function addWordSynonym(word_id, synonym, config, callback, errorCallback){

    axios.post(HOST + `/synonyms/`,
        {
            word_id: word_id,
            synonym: synonym,
            user_id: 1
            }, config)
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

export function deleteWordSynonym(synonym_id, callback, errorCallback){

    axios.delete(HOST + `/synonyms/${synonym_id}`)
        .then(res => {

            if(callback != null){
                callback(synonym_id);
            }
        })
        .catch(err => {
            if(errorCallback != null){
                errorCallback(err);
            }
        })
}

export function updateSynonym(synonym_id, word_id, synonym, callback, errorCallback){

    axios.put(HOST + `/synonyms/${synonym_id}`,
        {
            "id": synonym_id,
            "word_id": word_id,
            "synonym": synonym
        })
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