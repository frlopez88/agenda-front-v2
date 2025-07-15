import React from 'react'
import { useEffect , useState } from 'react'

const baseUrl = "http://18.208.142.244:3000/api/"
const endPoint = "person"


export const TablePerson = () => {

    const [ dataPeople, setDataPeople ] = useState([])

    const getPersons = async () => {

        const url = baseUrl + endPoint
        const result = await fetch(url)
        const data = await result.json()
        setDataPeople(data)

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
                    </tr>
                </thead>

                <tbody>

                    {
                      dataPeople.map( (item)=>(
                        <tr key={item.person_id}>
                            <td> {item.name} </td>
                            <td> {item.gender} </td>
                            <td> {item.birth_date} </td>
                        </tr>
                      ) )   
                    }

                </tbody>
            </table>
        </>
    )
}
