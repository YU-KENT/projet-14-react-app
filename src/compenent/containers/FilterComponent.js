

function FilterComponent ({ filterText, onFilter, onClear }) { 
    
    return(
		<><input
            id="search"
            className='search_Input'
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter} />
            <button className='clear_Button' type="button" onClick={onClear}>
                X
            </button>
            </>

);
}

export default FilterComponent