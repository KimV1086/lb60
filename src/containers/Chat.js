import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import Form from "../components/Form/Inputs";

class Chat extends Component {

    state = {
        author: '',
        message: '',
        messages: []
    };

    render() {
        return (
            <Container>
                <h1 className="display-5">Chat JS-5</h1>
                <Form/>
            </Container>
        );
    }
}

export default Chat;
