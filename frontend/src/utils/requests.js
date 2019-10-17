import axios from "axios";

/*export const getAllWords = () => {
    axios.get('http://127.0.0.1:8000/api/words').then(words =>
        console.log(words))
};*/


export function getAllWords(config, callback, errorcallback){
    axios.get("http://127.0.0.1:8000/api/words", config)
        .then(res => {
            //do something
            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if(errorcallback != null){
                errorcallback(err);
            }
        })
}