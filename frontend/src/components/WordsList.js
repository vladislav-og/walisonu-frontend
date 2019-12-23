import React, {Component} from "react";
import {getAllWords, addWord, deleteWord} from '../utils/wordRequests'
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import "../static/css/words.css"
import Word from "./Word"
import {getCurrentUser} from '../utils/authRequests'

class WordsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
            inputWord: '',
        };
    };

    componentDidMount() {
        getCurrentUser(res => {
            this.props.updateAppState({
                isLoading: false,
                currentUser: res.data,
                isAuthenticated: true,
            });

        }, err => {
            if (err.response.status === 401) {
                this.props.updateAppState({
                    isLoading: false,
                });
            }
        });
        this.getWords();
    };

    getWords = (e) => {
        getAllWords(res => {
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
        addWord(this.state.inputWord,res => {
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
                {
                    this.props.state.isAuthenticated &&
                    <Form style={{paddingTop: '2rem'}} onSubmit={this.addWord}>
                        <Form.Group as={Row}>
                            <Col sm="6">
                                <Form.Control value={this.state.inputWord}
                                              onChange={e => this.updateInputValue(e)}
                                              type="text" placeholder="Enter new word"/>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary" onClick={this.addWord}>Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                }

                {
                    this.state.words.map(item => (
                        <div key={item.wordId} className="word-card">
                            <Word doWordDelete={() => this.handleWordDelete(item.wordId)} word={item} state = {this.props.state}/>
                        </div>
                    ))
                }
            </Container>
        );
    };

}

export default (WordsList);
