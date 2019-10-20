import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button, Container, Row, Col, ListGroup} from "react-bootstrap";
import "../static/css/words.css"
import {getWordSynonyms} from "../utils/synonymRequests";

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            synonyms: []
        }
    };

    onClick = () => {
        getWordSynonyms(this.props.word.word_id, this.config, res => {
            this.setState({synonyms: res.data});
            console.log(this.state.synonyms)
        }, (err) => {
            //error
            alert(err);
        });
        this.setState({show: !this.state.show});
    };


    render() {
        if (this.state.show === false) {
            return (
                <Fragment>
                    <Card style={{width: '40rem'}}>
                        <Card.Body>
                            <Card.Title>{this.props.word.name}</Card.Title>
                            <Button variant="primary" onClick={this.onClick}>See synonyms</Button>
                        </Card.Body>
                    </Card>
                </Fragment>
            )
        }
        return (
            <Card style={{width: '40rem'}}>
                <Card.Header><Card.Title>{this.props.word.name}</Card.Title></Card.Header>
                <ListGroup>
                    {this.state.synonyms.map(item => (
                        <ListGroup.Item key={item.synonym_id}>{item.synonym}</ListGroup.Item>))}
                </ListGroup>
                <Button variant="danger" onClick={this.onClick}>Close synonyms</Button>
            </Card>
        )
    }
}

export default (Word);

