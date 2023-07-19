import { useState } from "react";

function SubHeaderComponent ({onValueChange,NumperPageChange}){
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const handleSearch = (value) => {
         onValueChange(value);
         setResetPaginationToggle(!resetPaginationToggle);
       };
     
    const handleCategoryChange = (value) => {
         console.log('childComponent,NumperPageChange',value)
         NumperPageChange(value);
         setResetPaginationToggle(!resetPaginationToggle);
       };
    return(
         <div className="table_subHeader">
             <div className="categories">
                 <span>Show</span>
                 <select onChange={(e) => handleCategoryChange(e.target.value)}>
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
                    onChange={(e) => handleSearch(e.target.value)}
                />
             </div>
         
        </div>
 
     )
 }

 export default SubHeaderComponent