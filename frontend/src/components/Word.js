import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button, Form, Row, Col, ListGroup} from "react-bootstrap";
import Synonym from "./Synonym"
import "../static/css/words.css"
import {getWordSynonyms, addWordSynonym, deleteWordSynonym} from "../utils/synonymRequests";


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
        getWordSynonyms(this.props.word.word_id, this.config, res => {
            this.setState({synonyms: res.data});
            // console.log(this.state.synonyms)
        }, (err) => {
            //error
            alert(err);
        });
        this.setState({show: !this.state.show});
    };

    addSynonym = (e) => {
        e.preventDefault();
        addWordSynonym(this.props.word.word_id, this.state.inputSynonym, this.config, res => {
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
        deleteWordSynonym(id,res => {
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
                            <Card.Title>{this.props.word.name}</Card.Title>
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
                    <Synonym synonyms={this.state.synonyms} deleteSynonym={this.deleteSynonym}/>
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
                    <Button variant="danger" onClick={this.onClick}>Close synonyms</Button>
                </Card>
            </Fragment>
        )
    }
}

export default (Word);

