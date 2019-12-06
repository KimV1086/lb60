import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Inputs = props => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleText">Author</Label>
                <Input type="text" name="text" id="exampleText"
                       placeholder="author"
                       onValue={props.author}
                       onInput={props.changeAuthor}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="text" id="exampleText"
                       placeholder="message"
                       onValue={props.message}
                       onInput={props.changeMessage}
                />
            </FormGroup>
            <Button onSendClick={props.sendMessage}>Add Message</Button>
        </Form>
    );
};

export default Inputs;
