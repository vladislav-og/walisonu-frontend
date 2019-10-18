import React, {Component} from "react";
import {getAllWords, getWord} from '../utils/wordRequests'
import {getWordSynonyms} from '../utils/synonymRequests'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Badge, Button} from "react-bootstrap";
import "../static/css/words.css"
import Word from "./Word"

class WordsList extends Component {
    config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);
        this.state = {
            words: [],
        };
    };

    componentDidMount() {
        getAllWords(this.config, res => {
            this.setState({words: res.data});
        }, (err) => {
            //error
            alert(err);
        });
    };

    onClick = () => {
        getWordSynonyms(4, this.config, res => {
            console.log(res)
            // this.setState({words: res.data});
        }, (err) => {
            //error
            alert(err);
        });
    };

    render() {
        return (

            <Container>
                {this.state.words.map(item => (
                    <div key={item.word_id} className="word-card">
                        <Word word={item}/>
                    </div>
                ))}
            </Container>

        );
    };

}

export default (WordsList);
