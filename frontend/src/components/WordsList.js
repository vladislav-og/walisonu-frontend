import React, {Component} from "react";
import {getAllWords} from '../utils/requests'

//import * as requests from '../utils/requests';

class WordsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
        };
    };


    /*componentDidMount() {
        getAllWords();
    }*/

    componentDidMount() {
        const config = {"Access-Control-Allow-Origin": "*"}
        getAllWords(config, (res) => {
            this.setState({words: res.data});
        }, (err) => {
            //error
            alert(err);
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.words.map(item => (
                        <li>{item.name}</li>
                    ))}

                </ul>
            </div>
        );
    };

}

export default (WordsList);
