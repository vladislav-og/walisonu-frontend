import React, {Component} from "react";
import {getAllWords} from '../utils/wordRequests'
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap";
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



    render() {

        return (
            <Container style={{width: '50rem'}}>
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
