import { useState } from "react";
import DataTable from "react-data-table-component";
import{columns,paginationComponentOptions,SubHeaderComponent}from'../../features/TableComponent'

const data = JSON.parse(localStorage.getItem('employees'))// get employess localstorage
console.log("_______",data)
const collectEmpolyeeValues = (obj)=> { //collect employee object values for filtering
	
	let result =''
	for(const key in obj){
       if(obj.hasOwnProperty(key)){
		result += obj[key]
	   }
	}
	
	return result
    
}

function TableComponent ()  {
 const [searchText, setSearchText] = useState("");
  const [paginationPerPage,SetpaginationPerPage] =useState("2")
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = data?data.filter(
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
  const customPagination = () => {
    const page = Math.ceil(filteredData.length / paginationPerPage);
    const pageButtons = [];

    for (let i = 1; i <= page; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`btn-pagination ${currentPage === i ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-container">
        <button
          className="btn-pagination"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
        Previous
        </button>
        {pageButtons}
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




  const paginatedData = filteredData.slice(
    (currentPage - 1) * paginationPerPage,
    currentPage * paginationPerPage
  );

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
        subHeaderComponent={<SubHeaderComponent 
            onValueChange={handleValueSearchTxt}
            NumperPageChange={handleNumPerPage}
            />}
        
      />
    </>
  );
};

export default TableComponent ;
