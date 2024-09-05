import Todonmae from "./assets/component/Todo-name"
import Todoitem from "./assets/component/Todoitem"
import Eror from "./assets/component/Eror"
import Todocontainer from "./Todocontainer"
import './App.css'
import { useReducer, useState } from "react"
import { Todocontext } from "./assets/store/Todo-item-context"
const newreducre=(curr,action)=>{
  let newtodoitemlist=curr;
  if(action.type=='new-todo'){
    newtodoitemlist=[ ...curr,{name:action.payload.itemname,date:action.payload.itemdata}];
  }else if(action.type=='del-todo'){
   newtodoitemlist= curr.filter(fil=>fil.name !=action.payload.itemname);
  }
  return newtodoitemlist;
}
function App() {
  // let itemtodoitemlist=[
  //   {
  //     name:"Buy milk",
  //     date:'2024/04/05'
  //   },
  //   {
  //     name:"go to school",
  //     date:"2024/04/06"
  //   },
  //   {
  //     name:"go to bank for money",
  //     date:"2024/04/07"
  //   }
  // ]
  const[todoitemlist,dispatch]=useReducer(newreducre,[{
    name:'go to home',
    date:'2024/5/7',
  }])
  // const [todoitemlist,settodoitemlist] = useState([]);
  const newitem=(itemname,itemdata)=>{
  //  settodoitemlist((curr)=>[...todoitemlist,{name:itemname,date:itemdata}])
  const newitemlist={
    type:'new-todo',
    payload:{
      itemname,
      itemdata,
    }
  }
  dispatch(newitemlist)
  }

  const handledete=(itemdelte)=>{
  //  let newitemset=todoitemlist.filter(fil=>fil.name !=itemdelte);
  //  settodoitemlist(newitemset);
  const delteitem={
    type:'del-todo',
    payload:{
      itemname:itemdelte,
      
    }
  }
  dispatch(delteitem)
  }
 
  return (
    <Todocontext.Provider value={{
   todoitemlist,
      newitem,
      handledete
      }}>
<center className="todo-contianer">
  <Todonmae></Todonmae>
  
  <Todoitem ></Todoitem>
 <Eror></Eror>
  <Todocontainer></Todocontainer>
</center>
</Todocontext.Provider>
  
  )
}

export default App;
