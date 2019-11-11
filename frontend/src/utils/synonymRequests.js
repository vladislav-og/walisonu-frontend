import axios from "axios";
axios.defaults.headers.delete['Content-Type'] ='application/json';

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

export function addWordSynonym(word_id, synonym, config, callback, errorCallback){

    axios.post(`/api/synonyms/`,
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

export function updateSynonym(synonym_id, word_id, synonym, callback, errorCallback){

    axios.put(`/api/synonyms/${synonym_id}`,
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