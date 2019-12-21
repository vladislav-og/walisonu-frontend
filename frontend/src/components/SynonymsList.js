import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {ListGroup} from "react-bootstrap";
import "../static/css/words.css"
import Synonym from "./Synonym";

class SynonymsList extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <Fragment>
                    <ListGroup>
                        {this.props.synonyms.map(item => (
                                <Synonym key={item.synonymId}
                                         synonym={item}
                                         state = {this.props.state}
                                         deleteSynonym={this.props.deleteSynonym}
                                         updateSynonym={this.props.updateSynonym}/>
                            ))}
                    </ListGroup>
            </Fragment>
        )
    }
}

export default (SynonymsList);

