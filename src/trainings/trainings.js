import NotesList from "./elements/notes-list/notes-list";
import PropTypes from "prop-types";

function Trainings(props) {
    const {records} = props;

    return (
        <div className={'trainings-container'}>
            <h2 className={'trainings-header'}>Тренировки</h2>
            <NotesList records={records}/>
        </div>
    )
}

Trainings.defaultProps = {
    records: [],
}
Trainings.propTypes = {
    records: PropTypes.array,
}

export default Trainings;
