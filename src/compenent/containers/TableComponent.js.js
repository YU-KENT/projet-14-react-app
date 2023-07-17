import { useState } from "react";
import DataTable from "react-data-table-component";
import SubHeaderComponent from "./SubHeaderComponent";
import{columns,paginationComponentOptions}from'../../features/TableComponentOption'


const collectEmpolyeeValues = (obj)=> { //collect employee object values for filtering
	let result =''
	for(const key in obj){
       if(obj.hasOwnProperty(key)){
		result += obj[key]
	   }
	}
	return result 
}

function TableComponent ( {datas})  {
  console.log('________',datas)
  const [searchText, setSearchText] = useState("");
  const [paginationPerPage,SetpaginationPerPage] =useState("10")
  const [currentPage,setCurrentPage]=useState("1")
  const filteredData = datas?datas.filter(
    (employee) =>
    collectEmpolyeeValues(employee).toLowerCase().includes(searchText.toLowerCase())   
    ):'';

  const handleValueSearchTxt =(value)=>{
    setSearchText(value)
  }

  const handleNumPerPage =(value)=>{
    console.log("handleNumPerPage",value)
    SetpaginationPerPage(value)
  }

  const paginatedData = filteredData.slice(
    (currentPage - 1) * paginationPerPage,
     currentPage * paginationPerPage
  );
  const page = Math.ceil(filteredData.length / paginationPerPage);

  const customPagination = () => {
    return (
      <div className="pagination-container">
        <div>
          <span>Showing 1 to {paginatedData.length} of {filteredData.length} entries</span>
        </div>
        <button
          className="btn-pagination"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
        Previous
        </button>
        {currentPage}
        <button
          className="btn-pagination"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === page}
        >
        Next
        </button>
      </div>
    );
  };
 
  return (
    <>
      <DataTable
        columns={columns}
        data={paginatedData}
        pagination
        paginationServer
        paginationTotalRows={filteredData.length}
        onChangePage={(page) => setCurrentPage(page)}
        paginationComponentOptions={paginationComponentOptions}
        paginationComponent={customPagination}
        highlightOnHover
        pointerOnHover
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
           <SubHeaderComponent 
            onValueChange={handleValueSearchTxt}
            NumperPageChange={handleNumPerPage}
            />
          }
        
      />
    </>
  );
};

export default TableComponent ;
