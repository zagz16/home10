import PropTypes from "prop-types";
import {useState} from "react";

import TrainingsModel from "../../db/trainings-model";
import NoteElement from "./note-element/note-element";
import InputForm from "../input-form/input-form";

function NotesList(props) {
    const {records} = props;
    const [notes, setNotes] = useState(records);
    const [dateValue, setDateValue] = useState('');
    const [distanceValue, setDistanceValue] = useState('');
    const [focus, setFocus] = useState(false);

    const addData = (data) => {
        const exist = notes.findIndex(note => note.date === data.dateString);
        if (exist >= 0) {
            setNotes(oldNotes => oldNotes.map((note, index) =>
                index === exist ? {...note, distance: data.distance} : note));
            setDateValue('')
            setDistanceValue('');
            setFocus(false);
            return;
        }
        const newNote = new TrainingsModel(data);
        setNotes(oldNotes => [...oldNotes, newNote]);
        setDateValue('')
        setDistanceValue('');
        setFocus(false);
    }

    const editClick = (id) => {
        const noteToEdit = notes.find(note => note.id === id);
        setDateValue(noteToEdit.date);
        setDistanceValue(noteToEdit.distance);
        setFocus(true);
    }

    const deleteClick = (id) => {
        setNotes(oldNotes => oldNotes.filter(note => note.id !== id));
        setDateValue('');
        setDistanceValue('');
    }

    const dateChange = (value) => setDateValue(value);
    const distanceChange = (value) => setDistanceValue(value);


    return (
        <>
            <InputForm onSubmit={addData} onDateChange={dateChange} onDistanceChange = {distanceChange}
            dateValue={dateValue} distanceValue={distanceValue} focus={focus}/>
            <ul className={'notes-list'}>
                {[...notes].sort((a, b) => b.dateObject - a.dateObject).map(note =>
                    <li key={note.id} className={'note-element'}>
                        <NoteElement
                             id={note.id} date={note.dateLong} distance={note.distance}
                            editClick={editClick} deleteClick={deleteClick}
                        />
                    </li>
                )}
            </ul>
        </>
    )
}

NotesList.propTypes = {
    records: PropTypes.array.isRequired,
}

export default NotesList;
