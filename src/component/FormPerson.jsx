import React , {useState} from 'react'

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "person"

export const FormPerson = () => {

    const [newPerson, setNewPerson ] = useState( 
        {
            name: "", 
            birth_date : "", 
            gender : ""
        }
    )

    const submitHandler = async (event) => {

        event.preventDefault()

        const token = localStorage.getItem("token")
        const url = baseUrl + endPoint
        const result = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPerson), 
            headers: {
                'Content-Type' : 'application/json', 
                'Authorization' : token
            }
        })

        const data = await result.json()
        console.log(data)

        window.location.reload()

    }

    const handlerName = (event)=>{
       newPerson.name = event.target.value
    }

     const handlerBithDate = (event)=>{
       newPerson.birth_date = event.target.value
    }

    const handlerGender = (event)=>{
       newPerson.gender = event.target.value
    }

    return (
        <>
            <h1>Person Form</h1>
            <main className='container ml-2 mr-2 mb-5'>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={handlerName} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select  onChange={handlerGender} className="form-select" aria-label="Default select example">
                            <option >Open this select menu</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birth Date</label>
                        <input onChange={handlerBithDate} type="date" className="form-control" />
                    </div>

                    <button className='btn btn-primary w-100'  >Save Data</button>
                </form>
            </main>
        </>
    )
}
