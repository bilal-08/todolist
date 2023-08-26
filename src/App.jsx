import { useState } from "react"
import ToDoLists from "./ToDoLists";
function App() {
  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }
  const listOfItems = () => {
    if(!inputList) return null
    setItems((oldItem)=> {
      return [...oldItem,inputList];
    })
    setInputList("")
  }

  const deleteItems =(id) => {
    setItems((oldItem)=> {
      return oldItem.filter((arrElem,index)=> {
        return index!=id;
      })
    })
}
const handleSubmit =(event) => {
  event.preventDefault();
}
  return (
    <>
<div className="container">
        <div className="heading">
        <h3>To-Do list</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="formputs">
                <input value={inputList} placeholder="Add an Item" onChange={itemEvent}/>
                <button onClick={listOfItems}>Submit!</button>
            </div>
            </form>

        <ol>
        { Items.map((itemval,index)=> {
               return <ToDoLists
               key={index} id={index}
               onSelect = {deleteItems}
                text={itemval}
                />
              })}

        </ol>



    </div>    
    </>
  )
}

export default App
