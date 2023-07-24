import { Link } from 'react-router-dom'
import TableComponent  from'../compenent/containers/TableComponent.js.js'


function Employees(){
const datas = JSON.parse(localStorage.getItem('employees'))// get employess localstorage

return(
    <section>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <TableComponent datas={datas} />
            <Link to ='/'>Home</Link>
        </div>
    </section>
)
}

export default Employees