import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button, Form, Row, Col, ListGroup} from "react-bootstrap";
import Synonym from "./SynonymsList"
import "../static/css/words.css"
import {getWordSynonyms, addWordSynonym, deleteWordSynonym, updateSynonym} from "../utils/synonymRequests";


class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            synonyms: [],
            inputSynonym: '',
        };
    };

    onClick = () => {
        getWordSynonyms(this.props.word.wordId,res => {
            this.setState({synonyms: res.data.sort((a,b) => (a.synonymId > b.synonymId) ? 1 : ((b.synonymId > a.synonymId) ? -1 : 0))});
        }, (err) => {
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
        addWordSynonym(this.props.word.wordId, this.state.inputSynonym,res => {
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
                return item.synonymId === res;
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
            let index = this.state.synonyms.findIndex(function(item){
                return item.synonymId === id;
            });

            this.state.synonyms[index] = {
                "synonymId": res.data.id,
                "wordId": res.data.wordId,
                "synonym": res.data.synonym,
                "userId": res.data.userId,
                "active": res.data.active,
            };
            this.setState({
                synonyms: [...this.state.synonyms]
            })
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
                                {
                                    this.props.state.currentUser != null && this.props.state.currentUser.role === "ADMIN" &&
                                    <Button style={{
                                        float: "right",
                                        margin: "0.2rem"
                                    }} variant="danger" size="sm" onClick={this.props.doWordDelete}>Delete
                                    </Button>
                                }
                            </Card.Title>
                            {
                                this.props.state.isAuthenticated &&
                                <Button variant="primary" onClick={this.onClick}>See synonyms</Button>
                            }
                        </Card.Body>
                    </Card>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <Card>
                    <Card.Header><Card.Title>{this.props.word.name}</Card.Title></Card.Header>
                    <Synonym synonyms={this.state.synonyms} state = {this.props.state} deleteSynonym={this.deleteSynonym} updateSynonym={this.updateSynonym}/>
                    <ListGroup.Item>
                        <Form>
                            <Form.Group as={Row}>
                                <Col className="input-col">
                                    <Form.Control value={this.state.inputSynonym}
                                                  onChange={e => this.updateInputValue(e)}
                                                  type="text" placeholder="Enter synonym"/>
                                </Col>
                                <Col className="input-col">
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

