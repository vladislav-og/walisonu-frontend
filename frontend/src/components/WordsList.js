import React, {Component} from "react";
import {getAllWords, addWord, deleteWord} from '../utils/wordRequests'
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "../static/css/words.css"
import Word from "./Word"

class WordsList extends Component {
    // config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);
        this.state = {
            words: [],
            inputWord: '',
        };
    };

    componentDidMount() {
        this.getWords();
    };

    getWords = (e) => {
        getAllWords(this.config, res => {
            console.log('get all new words');
            this.setState({words: res.data});
        }, (err) => {
            //error
            alert(err);
        });
    };

    updateInputValue(e) {
        this.setState({
            inputWord: e.target.value
        });
    };

    addWord= (e) => {
        e.preventDefault();
        if (!this.state.inputWord) return
        addWord(this.state.inputWord, this.config, res => {
            this.getWords();
        }, (err) => {
            //error
            alert(err);
        });
        this.setState({inputWord: ''});
    };

    handleWordDelete = (id) => {
        deleteWord(id, res => {
            this.getWords();
        }, (err) => {
            //error
            alert(err);
        });
    };

    render() {

        return (
            <Container style={{width: '50rem'}}>
                <Form style={{paddingTop: '2rem'}} onSubmit={this.addWord}>
                    <Form.Group as={Row}>
                        <Col sm="6">
                            <Form.Control value={this.state.inputWord}
                                          onChange={e => this.updateInputValue(e)}
                                          type="text" placeholder="Enter new word 222"/>
                        </Col>
                        <Col>
                            <Button type="submit" variant="primary" onClick={this.addWord}>Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
                {this.state.words.map(item => (
                        <div key={item.word_id} className="word-card">
                            <Word doWordDelete={() => this.handleWordDelete(item.word_id)} word={item}/>
                        </div>
                ))}
            </Container>
        );
    };

}

export default (WordsList);
