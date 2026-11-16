function FilterBar({ options, active, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter projects by technology">
      {options.map(o => (
        <button key={o} type="button" className="filter-btn" aria-pressed={active === o} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
