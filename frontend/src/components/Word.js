import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button, Form, Row, Col, ListGroup} from "react-bootstrap";
import Synonym from "./SynonymsList"
import "../static/css/words.css"
import {getWordSynonyms, addWordSynonym, deleteWordSynonym, updateSynonym} from "../utils/synonymRequests";


class Word extends Component {
    config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            synonyms: [],
            inputSynonym: '',
        };
    };

    onClick = () => {
        getWordSynonyms(this.props.word.wordId, this.config, res => {
            this.setState({synonyms: res.data.sort((a,b) => (a.synonym_id > b.synonym_id) ? 1 : ((b.synonym_id > a.synonym_id) ? -1 : 0))});
            // console.log(this.state.synonyms)
        }, (err) => {
            //error
            alert(err);
        });
        this.toggleView();
    };

    toggleView = () => {
        this.setState({show: !this.state.show});
    };

    addSynonym = (e) => {
        e.preventDefault();
        if (!this.state.inputSynonym) return
        addWordSynonym(this.props.word.wordId, this.state.inputSynonym, this.config, res => {
            //TODO: Probably not the best way....
            this.onClick();
            this.setState({show: !this.state.show});

        }, (err) => {
            //error
            alert(err);
        });
        this.setState({inputSynonym: ''});
    };

    deleteSynonym = (id) => {
        deleteWordSynonym(id, res => {
            let index = this.state.synonyms.findIndex(function(item){
                return item.synonym_id === res;
            });
            this.state.synonyms.splice(index, 1);
            this.setState({
                synonyms: [...this.state.synonyms]
            })

        }, (err) => {
            //error
            alert(err);
        });
    };

    updateSynonym = (id, synonym) => {
        updateSynonym(id, this.props.word.wordId, synonym, res => {

            console.log('a');
            let index = this.state.synonyms.findIndex(function(item){
                return item.synonym_id === id;
            });
            console.log('b');
            this.state.synonyms[index] = {
                "synonym_id": res.data.id,
                "wordId": res.data.wordId,
                "synonym": res.data.synonym,
                "userId": res.data.userId,
                "active": res.data.active,
            };
            console.log('c');
            this.setState({
                synonyms: [...this.state.synonyms]
            })
            console.log("d")
        })
    };

    updateInputValue(e) {
        this.setState({
            inputSynonym: e.target.value
        });
    };

    render() {
        if (this.state.show === false) {
            return (
                <Fragment>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {this.props.word.name}
                                <Button style={{
                                    float: "inline-end",
                                    margin: "0.2rem"
                                        }} variant="danger" size="sm" onClick={this.props.doWordDelete}>Delete</Button>
                            </Card.Title>
                            <Button variant="primary" onClick={this.onClick}>See synonyms</Button>
                        </Card.Body>
                    </Card>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <Card>
                    <Card.Header><Card.Title>{this.props.word.name}</Card.Title></Card.Header>
                    <Synonym synonyms={this.state.synonyms} deleteSynonym={this.deleteSynonym} updateSynonym={this.updateSynonym}/>
                    <ListGroup.Item>
                        <Form>
                            <Form.Group as={Row}>
                                <Col sm="6">
                                    <Form.Control value={this.state.inputSynonym}
                                                  onChange={e => this.updateInputValue(e)}
                                                  type="text" placeholder="Enter synonym"/>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="primary" onClick={this.addSynonym}>Submit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </ListGroup.Item>
                    <Button variant="danger" onClick={this.toggleView}>Close synonyms</Button>
                </Card>
            </Fragment>
        )
    }
}

export default (Word);

