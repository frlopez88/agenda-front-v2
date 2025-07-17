import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "person"


export const TablePerson = () => {

    const navigate = useNavigate()

    const [dataPeople, setDataPeople] = useState([])

    const getPersons = async () => {

        const url = baseUrl + endPoint
        const result = await fetch(url)
        const data = await result.json()
        setDataPeople(data)

    }

    const handleEdit = (id) => {

        navigate(`/editPerson/${id}`)

    }

    const handleDelete = async (id) => {

        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE"
        })

        const data = await result.json()
        
        window.location.reload();
    }

    useEffect(() => {

        getPersons()

    }, [])

    return (
        <>
            <h1>People Data Base</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        dataPeople.map((item) => (
                            <tr key={item.person_id}>
                                <td> {item.name} </td>
                                <td> {item.gender} </td>
                                <td> {item.birth_date} </td>
                                <td>
                                    <button className='btn btn-primary'
                                        onClick={() => handleEdit(item.person_id)} >
                                        Edit
                                    </button>
                                    <button className='btn btn-danger'
                                        onClick={() => handleDelete(item.person_id)} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
