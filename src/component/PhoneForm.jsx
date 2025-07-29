import React , {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "phone"

export const PhoneForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {person_id} = params
  const [phone, setPhone] = useState(
    {
      person_id: person_id,
      phone_number: ""
    }
  );

  const formHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    phone[inputName] = inputValue;

  }

  const submintHandler = async () => {

    event.preventDefault()
    const url = `${baseUrl}${endPoint}`
    const token = localStorage.getItem("token")
    const result = await fetch(url, {
      method: "POST", 
      body: JSON.stringify(phone),
      headers: {
        'Content-Type' : "application/json", 
        'Authorization' : token
      }
    })

    const data = await result.json();

    window.location.reload()

  }

  const returnHandler = ()=>{

    navigate("/person")

  }

  return (
    <>

      <main className='container ml-2 mr-2 mb-5 mt-5'>
        <form onSubmit={submintHandler}>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input name="phone_number" onChange={formHandler} type="tel" className="form-control" />
          </div>

          <button className='btn btn-primary w-100' >Save</button>
        </form>
        <button className='btn btn-warning mt-3 w-100' onClick={returnHandler} >Return</button>
      </main>
    </>
  )
}
