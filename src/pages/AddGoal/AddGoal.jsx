import { useState, useRef, useEffect } from "react"
import '../AddIncome/AddIncome&Expense.css'

function AddGoal(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
		currentAmount: 0,
    amount: 0,
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddGoal(formData)
  }

  return (
    <>
      <h2 className = "category-title">Add a New Savings Goal</h2>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="container">
					<label htmlFor="name-input" className="form-label">
					</label>
					<input 
					placeholder="Goal Name"
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
					<label htmlFor="amount-input" className="form-label">
						$
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
				
				<div className="container">
					<button
						type="submit"
						className="add-btn"
            disabled={!validForm}
					>
						Add Goal
					</button>
				</div>
			</form>
    </>
  )
}


export default AddGoal