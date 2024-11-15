import React, { useState } from 'react'

export default function DeleteModal({ data, handleToggle, updateData }) {

    const [idToDelete, setIdToDelete] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        handleToggle(false)
        const tempData = []
        for (let i = 0; i < idToDelete - 1; i++) {
            tempData.push(data[i])
        }
        for (let i = idToDelete; i < data.length; i++) {
            const tempObject = data[i]
            tempData.push({ ...tempObject, id: tempObject.id - 1 })
        }
        updateData(tempData)
    }
    const handleChange = (e) => {
        const inputValue = e.target.value
        setIdToDelete(inputValue)
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter the Id to Delete</h3>
            <div>
                <label>Id</label>
                <input type='number' pattern="[0-9]{2,}" name="id" value={idToDelete} onChange={handleChange} required />
            </div>

            <button type='submit'>Submit</button>
        </form >
    )
}
