import { Link } from 'react-router-dom'
import DataTable from '../containers/DataTable'
function Employees(){

return(

    <section>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable/>
            <Link to ='/Home'>Home</Link>
        </div>
    </section>

)

}

export default Employees