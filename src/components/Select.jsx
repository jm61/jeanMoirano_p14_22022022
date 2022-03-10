const Select = ({type, name, id, action}) => {
  
    return (
        <div className="center">
            <label htmlFor={name}>{name}</label>
           <select name={name} id={id} onChange={action} required  >
          {type.map( data => (
            <option value={data.value} key={data.id}>
            {data.name}
          </option>
          ))}
          </select>
        </div>
    )
}
export default Select