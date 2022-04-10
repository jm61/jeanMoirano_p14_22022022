import PropTypes from "prop-types";

/**
 * Select component (dropdown menus)
 * @param {type, name, id, action} props of the Select component
 * @returns
 */
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
Select.propTypes = {
  type: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default Select