import states from'../../data/datas'
import { useDispatch} from 'react-redux'
import * as actions from '../../outils/reducer/employeeReducer'

function ListsState (){
const dispatch = useDispatch()
const handleChange = (e) => {
    dispatch(actions.setState(e.target.value))
  }

return (
  <div>
  <select className='state_select' onChange={(e) => handleChange(e)}>
  {states.map((state) => {return <option className='state_option' key={state.abbreviation} value={state.abbreviation}>{state.name}</option>})}
  </select>
  </div>
  );

}

export default ListsState