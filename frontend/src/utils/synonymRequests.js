import axios from "axios";

export function getAllSynonyms(config, callback, errorCallback){
    axios.get("http://127.0.0.1:8000/api/synonyms", config)
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

    axios.get(`http://127.0.0.1:8000/api/synonyms/${id}`, config)
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

export function addWordSynonym(word, synonym, config, callback, errorCallback){

    axios.post(`http://127.0.0.1:8000/api/synonyms/`,
        {word_id: word,
        synonym: synonym,
        isActive: true}, config)
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