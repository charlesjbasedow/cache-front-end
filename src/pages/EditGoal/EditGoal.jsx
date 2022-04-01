import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import '../AddIncome/AddIncome&Expense.css'

function EditGoal(props) {
  const formElement = useRef()
  const location = useLocation()
  const [validForm, setValidForm] = useState(true)
  const [formData, setFormData] = useState(location.state.goal)

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
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
      <h1 className="category-title">Edit Goal</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="container">
					<label htmlFor="name-input" className="form-label">
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
				<div className="container">
					<label htmlFor="currentAmount-input" className="form-label">
						$
					</label>
					<input 
						type="number"
						className="form-control"
						id="currentAmount-input"
						name="currentAmount"
            value={formData.currentAmount}
            onChange={handleChange}
					/>
				</div>
				<div className="container">
					<label htmlFor="amount-input" className="form-label">
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
				<div>
					<button
						type="submit"
						className="add-btn"
            disabled={!validForm}
					>
						Update Goal
					</button>
				</div>
			</form>
    </>
  )
}


export default EditGoal;

