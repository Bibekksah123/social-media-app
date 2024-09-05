import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Todocontext } from "./assets/store/Todo-item-context";

function Todo({itemlist1,dateitem}){
  
  const contextobj=useContext(Todocontext)
const ondelteitem=contextobj.handledete;
  return (
    <div className="container">
  <div className="row">
    <div className="col-6">
    {itemlist1}
    </div>
    <div className="col-4">
      {dateitem}
    </div>
    <div className="col-2">
      <button className=" btn btn-danger kg-button" onClick={()=>ondelteitem(itemlist1)}><RiDeleteBin6Fill /></button>
    </div>

  </div>
  </div>
  )
}
export default Todo;