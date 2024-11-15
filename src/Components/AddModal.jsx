import React, { useState } from 'react'

export default function AddModal({ data, handleToggle, updateData }) {
    const uniqueDepartments = [...new Set(data.map(data => data.department))]
    const [formData, setFormData] = useState({
        id: data.length + 1,
        name: 'IT',
        department: ''
    });
    const { id, name, department } = formData
    const handleSubmit = (e) => {
        e.preventDefault()
        handleToggle(false)

        updateData(formData)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Details</h3>
            <div>
                <label>Id</label>
                <input type='number' pattern="[0-9]{2,}" name="id" value={id} onChange={handleChange} required />
            </div>
            <div>
                <label>Desingantion</label>
                <select value={name} onChange={handleChange} name="name">
                    <option value="">Select...</option>
                    {
                        uniqueDepartments.map((data) => <option value={data}>{data}</option>)
                    }
                </select>

            </div>
            <div>
                <label>Department</label>
                <input type='text' name="department" value={department} onChange={handleChange} required />
            </div>
            <button type='submit'>Submit</button>
        </form >
    )
}
