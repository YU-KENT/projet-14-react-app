import { Link } from 'react-router-dom'

import TableComponent  from'../containers/TableComponent.js'
function Employees(){

return(

    <section>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
   
            <TableComponent />
            <Link to ='/Home'>Home</Link>
        </div>
    </section>

)

}

export default Employees