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
  

  const customPagination = () => {
    const pageButtons = [];
    const page = Math.ceil(filteredData.length / paginationPerPage);
    for (let i = 1; i <= page; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`btn-pagination-page ${currentPage === i ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-container">
        <div className="dataTables_info"> 
          <span>Showing 1 to {paginatedData.length} of {filteredData.length} entries</span>
        </div>
        <div className="dataTables_page">
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
