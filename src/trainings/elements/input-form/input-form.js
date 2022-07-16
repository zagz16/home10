import PropTypes from 'prop-types';
import {useEffect, useRef} from "react";

function InputForm(props) {
    const distRef = useRef();
    const dateRef = useRef();

    const {
        onSubmit, onDateChange, onDistanceChange,
        dateValue, distanceValue, focus,
    } = props;

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        onSubmit({
            dateString: data.get('date'),
            distance: data.get('distance'),
        });
        distRef.current.blur();
        dateRef.current.blur();
    }

    const dateChangeHandler = (e) => {
        onDateChange(e.target.value);
    }
    const distanceChangeHandler = (e) => {
        onDistanceChange(e.target.value);
    }

    useEffect(() => {
        if (focus) {
            distRef.current.focus();
        }
    }, [focus, distanceValue]);

    return (
        <form className={'trainings-form'} onSubmit={onFormSubmit}>
            <div className={'date-input-container'}>
                <label htmlFor={"date"} className={'date-input-label'}>{'Дата (дд.мм.гг)'}</label>
                <input className={'date-input'} type={"text"} name={"date"}
                       value={dateValue}
                       onChange={dateChangeHandler}
                       pattern='[0-9]{2}\.[0-9]{2}\.[0-9]{2}'
                       required ref={dateRef}/>
            </div>
            <div className={'distance-input-container'}>
                <label htmlFor={"distance"} className={'distance-input-label'}>{'Дистанция (км)'}</label>
                <input className={'distance-input'} type={"text"}
                       onChange={distanceChangeHandler}
                       name={"distance"} value={distanceValue} required ref={distRef}
                />
            </div>
            <div className={'submit-button-container'}>
                <button className={'submit-button'} type={'submit'}>Ok</button>
            </div>
        </form>
    )
}

InputForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDateChange: PropTypes.func.isRequired,
    onDistanceChange: PropTypes.func.isRequired,
    distanceValue: PropTypes.string.isRequired,
    dateValue: PropTypes.string.isRequired,
};

export default InputForm;
