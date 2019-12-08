import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import "../static/css/words.css"
import {deleteWordSynonym} from "../utils/synonymRequests"

class Synonym extends Component {
    config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            newSynonym: this.props.synonym.synonym,
        };
    };

    updateInputValue(e) {
        this.setState({
            newSynonym: e.target.value
        });
    };

    updateSynonym = () => {
        this.props.updateSynonym(this.props.synonym.synonymId, this.state.newSynonym);
        this.toggleUpdate()
    };

    toggleUpdate = () => {
        this.setState({update: !this.state.update});
    };

    render() {
        if (this.state.update === false) {
            return (
                <Fragment>
                    <ListGroup.Item>
                        <Row>
                            <Col sm="2">
                                {this.props.synonym.synonym}
                            </Col>
                            <Col sm="2">
                                <Button type="submit" variant="danger" onClick={() => this.props.deleteSynonym(this.props.synonym.synonymId)}>Delete</Button>
                            </Col>
                            <Col sm="2">
                                <Button type="submit" variant="info" onClick={this.toggleUpdate}>Update</Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <ListGroup.Item>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="6">
                                <Form.Control value={this.state.newSynonym}
                                              onChange={e => this.updateInputValue(e)}
                                              type="text" placeholder={this.state.newSynonym}/>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary" onClick={this.updateSynonym}>Update</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </ListGroup.Item>
            </Fragment>
        )
    }
}

export default (Synonym);
