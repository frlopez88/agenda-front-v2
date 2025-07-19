import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "person"

export const EditFormPerson = () => {

    const navigate = useNavigate()

    const params = useParams()

    const [personEdit, setPersonEdit] = useState(
        {
            name: "",
            birth_date: "",
            gender: ""
        }
    );

    const formHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        personEdit[inputName] = inputValue;
        console.log(personEdit)
    }

    const getPersonById = async () => {

        const { id_person } = params;
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const endPoint = "person"
        const url = `${baseUrl}${endPoint}/${id_person}`

        const result = await fetch(url)
        const data = await result.json()
        const element = data[0]

        const { name,birth_date,gender } = element

        setPersonEdit({
            name,
            birth_date,
            gender
        })

        console.log(birth_date)
    }

    const submintHandler = async () => {

        event.preventDefault()

        const id_person = params.id_person;

        const url = `${baseUrl}${endPoint}/${id_person}`

        console.log(url);

        const result = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(personEdit),
            headers: {
                'Content-Type': "application/json"
            }
        })

        const data = await result.json()

        navigate("/person")
    }

    useEffect(() => {
        getPersonById()
    }, [])

    return (
        <>

            <h1>Edit Person</h1>

            <main className='container ml-2 mr-2 mb-5'>
                <form onSubmit={submintHandler}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" onChange={formHandler}
                            type="text"  className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select  name="gender" onChange={formHandler} className="form-select" aria-label="Default select example">
                            <option >Open this select menu</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birth Date</label>
                        <input  name="birth_date" onChange={formHandler} type="date" className="form-control" />
                    </div>

                    <button className='btn btn-primary w-100'  >Save Data</button>
                </form>
            </main>

        </>
    )
}
