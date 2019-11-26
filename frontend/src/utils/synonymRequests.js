import axios from "axios";
axios.defaults.headers.delete['Content-Type'] ='application/json';
// const HOST = "http://127.0.0.1:8000/api";
const HOST = "http://174.129.108.32:8000/api";

export function getAllSynonyms(config, callback, errorCallback){
    axios.get("/api/synonyms", config)
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
    axios.get(`/api/synonyms/${id}`, config)
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

export function addWordSynonym(wordId, synonym, config, callback, errorCallback){
    axios.post(`/api/synonyms/`,
        {
            wordId: wordId,
            synonym: synonym,
            userId: 1
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

    axios.delete(`/api/synonyms/${synonym_id}`)
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

export function updateSynonym(synonymId, wordId, synonym, callback, errorCallback){
    axios.put(`/api/synonyms/${synonymId}`,
        {
            "id": synonymId,
            "wordId": wordId,
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