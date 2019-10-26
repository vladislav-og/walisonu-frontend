import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Form, ListGroup, Row} from "react-bootstrap";
import "../static/css/words.css"
import Synonym from "./Synonym";

class SynonymsList extends Component {
    config = {"Access-Control-Allow-Origin": "*"};

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <Fragment>
                    <ListGroup>
                        {this.props.synonyms.map(item => (
                                <Synonym key={item.synonym_id}
                                         synonym={item}
                                         deleteSynonym={this.props.deleteSynonym}
                                         updateSynonym={this.props.updateSynonym}/>
                            ))}
                    </ListGroup>
            </Fragment>
        )
    }
}

export default (SynonymsList);

