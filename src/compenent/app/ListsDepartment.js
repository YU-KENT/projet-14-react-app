import { useDispatch} from 'react-redux'
import * as actions from '../../outils/reducer/employeeReducer'


function ListDepartment (){
  const departments = ['Sales','Marketing','Engineering','Human Resources','Legal']
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(actions.setDepartment(e.target.value))
      }
    
    return (
      <div>
      <select className='' onChange={(e) => handleChange(e)}>
      {departments.map((dep,index) => {return <option className='' key={index} value={dep}>{dep}</option>})}
      </select>
      </div>
      );
    
    }
    
    export default ListDepartment