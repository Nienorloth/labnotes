import React from 'react';
import Form from '../components/Form/Form';
import Note from './../components/Note/Note';
import firebase from 'firebase';
import { DB_CONFIG } from './../config/config';
import 'firebase/database';

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [
                // { noteId: 1, noteContent: 'note 1'},
                // { noteId: 2, noteContent: 'note 2' }
            ]
        };
        this.app = firebase.initializeApp(DB_CONFIG);   
        this.db = this.app.database().ref().child('notes');
        this.addNote = this.addNote.bind(this);
    }

    componentDidMount() {
        const { notes } = this.state;
        this.db.on('child_added', snap => {
            notes.push({
                noteId: snap.key,
                noteContent: snap.val().noteContent
            })
            this.setState({notes});
        })
    }
    

    addNote(note) {
        // let {notes} = this.state;
        // notes.push({
        //     noteId: notes.length + 1,
        //     noteContent: note
        // });
        // this.setState({ notes });
        this.db.push().set({noteContent: note});
        
    }

    removeNote() {

    }

    render () {
        return (
        <div className="Container">
            <div className="NotesHeader">
                <h1>Tus notas</h1>
            </div>
            <div className="NotesBody">
         <Form addNote={this.addnote} />
                <ul>
                  {
                    this.state.notes.map(note => {
                        return (
                           <Note 
                               noteContent={note.noteContent}
                               noteId={note.noteId}
                               key={note.noteId}
                           />
                        )
                    })
                  }
                </ul>
            </div>
          </div>
        )
    }
}

export default Notes;