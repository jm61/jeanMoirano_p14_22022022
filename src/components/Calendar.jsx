const Calendar = ({name, id, action, label}) => {
    return (
        <div className='center'>
         <label  htmlFor={name}>{label}</label> 
        <input type="date" id={id} name={name} onChange={action} required/>
        </div>
    )
}
export default Calendar