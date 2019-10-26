import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Form, ListGroup, Row} from "react-bootstrap";
import "../static/css/words.css"
import {deleteWordSynonym} from "../utils/synonymRequests"

class Synonym extends Component {
    config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);

    };

    render() {
        return (
            <Fragment>
                    <ListGroup>
                        {this.props.synonyms.map(item => (
                            <ListGroup.Item key={item.synonym_id}>
                                <Row>
                                    <Col sm="2">
                                        {item.synonym}
                                    </Col>
                                    <Col sm="2">
                                        <Button type="submit" variant="danger" onClick={() => this.props.deleteSynonym(item.synonym_id)}>Delete</Button>
                                    </Col>
                                    <Col sm="2">
                                        <Button type="submit" variant="info">Update</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>))}
                    </ListGroup>
            </Fragment>
        )
    }
}

export default (Synonym);

