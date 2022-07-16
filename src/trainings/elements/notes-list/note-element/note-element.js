import PropTypes from "prop-types";

function NoteElement(props) {
    const {id, date, distance, editClick, deleteClick} = props;

    const editClickHandler = () => {
        editClick(id);
    }

    const deleteClickHandler = () => {
        deleteClick(id);
    }

    return (
        <>
            <div className={'note-date'}>{date}</div>
            <div className={'note-distance'}>{distance}</div>
            <button onClick={editClickHandler} className={'edit-button'}>Edit</button>
            <button onClick={deleteClickHandler} className={'delete-button'}>Delete</button>
        </>
    )
}

NoteElement.propTypes = {
    date: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
}

export default NoteElement;
