import {useContext } from "react";
import Todo from "./Tdoitem";
import { Todocontext } from "./assets/store/Todo-item-context";

const Todocontainer=({ondelteitem})=>{
  const contextobj=useContext(Todocontext)
const todoitemlist=contextobj.todoitemlist;
  return(

    <div className="item-container">
      {todoitemlist.map(item=>
         <Todo itemlist1={item.name}  dateitem={item.date} key={item.name}></Todo>
      )}
  </div>
  )
}
export default Todocontainer;