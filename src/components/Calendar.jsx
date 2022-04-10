import PropTypes from "prop-types"

/**
 * Calendar (DatePicker) component
 * @param {name, label, id, action} props of Calendar component
 * @returns
 */
const Calendar = ({name, id, action, label}) => {
    return (
        <div className='center'>
         <label  htmlFor={name}>{label}</label> 
        <input type="date" id={id} name={name} onChange={action} required/>
        </div>
    )
}
Calendar.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  };
export default Calendar