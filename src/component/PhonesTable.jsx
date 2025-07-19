import React , {useState, useEffect} from 'react'
import { use } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "phone"
const endPoint2 = "person"

export const PhonesTable = () => {

  const [phones, setPhones] = useState([])
  const [person, setPerson] = useState({})

  const params = useParams()

  const getPhones = async ()=>{

    const {person_id} = params
    const url = `${baseUrl}${endPoint}/${person_id}`
    const result = await fetch(url)
    const data = await result.json()
    setPhones(data)

  }

  const getPerson = async()=>{

    const {person_id} = params
    const url = `${baseUrl}${endPoint2}/${person_id}`
    const result = await fetch(url)
    const data = await result.json()
    console.log(data[0])
    setPerson(data[0])

  }

  const deletePhone = async (id) =>{

    const url = `${baseUrl}${endPoint}/${id}`
    const result = await fetch(url, {
      method: "DELETE"
    })

    window.location.reload()

  }

  useEffect( ()=>{
    getPhones()
    getPerson()
  } , [] )

  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th >{person.name}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
              phones.map(item =>(
                <tr key={item.phone_id}>
                  <td>{item.phone_number}</td>
                  <td>
                    <button className='btn btn-danger'
                      onClick={()=> deletePhone(item.phone_id) }
                    ><i class="bi bi-file-earmark-minus"></i></button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>

    </>
  )
}
