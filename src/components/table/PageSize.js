function PageSize({ pageSize, setPageSize }) {
    return (
      <label htmlFor="entriesSelector" className="table__header--selector">
        show
        <select className="select" value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} id="entriesSelector">
          {[5, 10, 20, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        entries
      </label>
    );
  }
  export default PageSize;