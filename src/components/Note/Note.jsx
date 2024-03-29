import React from 'react';
import './Note.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id) {
        alert('remove: '+  id)
    }

    render() {
        return (
        <div className="Note">
            <span
            onClick={() => {this.handleRemove(this.noteId)}}
            >&times;</span>
            <p>{ this.noteContent }</p>
        </div>
        )
    }
}

export default Note;