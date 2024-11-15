import React from 'react'

export default function Table({ tableData }) {
    return (
        <div>
            <table>
                <thead>
                    <td>Id</td>
                    <td>Designation</td>
                    <td>Department</td>
                </thead>
                <tbody>
                    {
                        tableData.map((data) =>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.department}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
