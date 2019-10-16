import axios from "axios";

export const getAllWords = () => {
    axios.get('http://127.0.0.1:8000/api/words').then(words =>
        console.log(words))
};