import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Row, Col, ListGroup, Form} from "react-bootstrap";
import "../static/css/words.css"


class Synonym extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <Fragment>
                    <ListGroup>
                        {this.props.synonyms.map(item => (
                            <ListGroup.Item key={item.synonym_id}>{item.synonym}</ListGroup.Item>))}
                    </ListGroup>
            </Fragment>
        )
    }
}

export default (Synonym);

