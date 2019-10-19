import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button} from "react-bootstrap";
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
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.word.name}</Card.Title>
                            <Button variant="primary" onClick={this.onClick}>See synonyms</Button>
                        </Card.Body>
                    </Card>
                </Fragment>
            )
        }
        // TODO create separate component for synonyms
        const synonyms = this.state.synonyms.map(item => (
                <div key={item.synonym_id} className="synonyms">{item.synonym}</div>
            ));
        return (
            <Fragment>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.word.name}</Card.Title>
                        <Button variant="danger" onClick={this.onClick}>Close synonyms</Button>
                    </Card.Body>
                </Card>
                {synonyms}
            </Fragment>
        )
    }
}

export default (Word);

