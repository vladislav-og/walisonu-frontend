import React, { Component } from "react";
import axios from 'axios';
import {getAllWords} from '../utils/requests'

class WordsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
        };

    }

    componentDidMount() {
        getAllWords();
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default (WordsList);
