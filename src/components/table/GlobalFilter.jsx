import PropTypes from "prop-types"

/**
 * GlobalFilter component is the hook that implements global row   *filtering – in other words, filtering based upon data that may be  *in any column in a given row. 
 * @param {filter, setFilter}
 * @returns render
 */
const GlobalFilter = ({ filter, setFilter }) => {
    return (
      <div className="table__header--search">
        Search
        <input
          value={filter || ""}
          onChange={(event) => setFilter(event.target.value)}
          className="table__header--input"
          placeholder="enter your search..."
        />
      </div>
    )
  }
GlobalFilter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
}
export default GlobalFilter