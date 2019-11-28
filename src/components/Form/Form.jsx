import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
    }

    addNote() {
        this.props.addNote(this.textInput.value);
    }

    render () {
        return (
            <div className="Form">
                <input 
                placeholder="Write a note"
                ref={input => {this.textInput = input;}}
                type="text"/>
                <button
                 onClick={this.AddNote}
                >Add note</button>
            </div>
        )
    }
}

export default Form;