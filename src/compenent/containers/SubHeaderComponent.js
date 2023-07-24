

function SubHeaderComponent ({onValueChange,NumperPageChange}){

    return(
         <div className="table_subHeader">
             <div className="categories">
                 <span>Show</span>
                 <select onChange={(e) => NumperPageChange(e.target.value)}>
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                 </select>
                 <span>entries</span>
            </div>
             <div className='table_search'>
                <label>Search:</label>
                <input type="text" placeholder=''
                    onChange={(e) => onValueChange(e.target.value)}
                />
             </div>
         
        </div>
 
     )
 }

 export default SubHeaderComponent