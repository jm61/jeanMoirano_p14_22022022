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
export default GlobalFilter