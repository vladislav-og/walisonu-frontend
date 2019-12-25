import axios from "axios";
axios.defaults.headers.delete['Content-Type'] ='application/json';

export function getAllSynonyms(callback, errorCallback){
    axios.get("/api/synonyms", {headers: {
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

export function getWordSynonyms(id, callback, errorCallback){
    axios.get(`/api/synonyms/${id}`, {headers: {
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

export function addWordSynonym(wordId, synonym, callback, errorCallback){
    axios.post(`/api/synonyms/`,
        {
            wordId: wordId,
            synonym: synonym,
            userId: 1
            }, {headers: {
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

export function deleteWordSynonym(synonym_id, callback, errorCallback) {

    axios.delete(`/api/synonyms/${synonym_id}`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
        }})
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
        }, {headers: {
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