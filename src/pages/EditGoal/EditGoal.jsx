import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditGoal(props) {
  const formElement = useRef()
  const location = useLocation()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState(location.state.goal)

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(true)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateGoal(formData)
  }

  return (
    <>
      <h1>Edit Goal</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Goals's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="amount-input" className="form-label">
						Goal Amount (required)
					</label>
					<input 
						type="number"
						className="form-control"
						id="amount-input"
						name="amount"
            value={formData.amount}
            onChange={handleChange}
						required
					/>
				</div>
				
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Goal
					</button>
				</div>
			</form>
    </>
  )
}


export default EditGoal;