import { useState } from 'react'
import data from "./Components/Data.json"
import './App.css'
import Table from './Components/Table'
import AddModal from './Components/AddModal'
import DeleteModal from './Components/DeleteModal'

function App() {
  const [initialData, setInitialData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : data)
  const [isAddModelOpen, setIsAddModelOpen] = useState(false)
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false)


  const handleAddModelToggle = (data) => {
    setIsAddModelOpen(data)
  }
  const handleDeleteModelToggle = (data) => {
    setIsDeleteModelOpen(data)
  }

  const updateDataAdd = (data) => {
    localStorage.setItem('data', JSON.stringify([...initialData, data]));
    setInitialData([...initialData, data])
  }
  const updateDataDelete = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
    setInitialData(data)
  }
  return (
    <div className='container'>
      <h1> Employee Entries !</h1>
      <div className='mainTable'>
        {
          isAddModelOpen && (<div className='modelBox'><AddModal data={initialData} handleToggle={handleAddModelToggle} updateData={updateDataAdd} />  </div>)
        }
        {
          isDeleteModelOpen && (<div className='modelBox'><DeleteModal data={initialData} handleToggle={handleDeleteModelToggle} updateData={updateDataDelete} />  </div>)
        }
        <div className='tableBox'> <Table tableData={initialData} /></div>
        <button style={{ marginTop: "16px" }} onClick={() => handleAddModelToggle(true)}>Add</button>
        <button style={{ marginTop: "16px" }} onClick={() => handleDeleteModelToggle(true)}>Delete</button>
      </div>
    </div >
  )
}

export default App
