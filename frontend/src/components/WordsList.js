import React, {Component} from "react";
import {getAllWords, getWord} from '../utils/wordRequests'
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";

//import * as requests from '../utils/requests';

class WordsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
        };
    };

    componentDidMount() {
        const config = {"Access-Control-Allow-Origin": "*"};
        getAllWords(config, res => {
            this.setState({words: res.data});
        }, (err) => {
            //error
            alert(err);
        });
        // getWord(4,config, res => {
        //     console.log(res)
        //     this.setState({words: res.data});
        // }, (err) => {
        //     //error
        //     alert(err);
        // });
    };

    render() {
        return (

            <Container>
                {this.state.words.map(item => (
                    <p>{item.name}</p>
                ))}
            </Container>

        );
    };

}

export default (WordsList);
