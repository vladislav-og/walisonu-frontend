import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button} from "react-bootstrap";
import "../static/css/words.css"

class Word extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.word.name}</Card.Title>
                    <Button variant="primary">See synonyms</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default (Word);

