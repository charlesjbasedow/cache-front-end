import { useState, useRef, useEffect } from "react";

const AddIncome = (props) => {
  const formElement = useRef()

  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState({
    category: '',
    amount: 0, 
    date: new Date().toLocaleDateString()
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddIncome(formData)
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (  
    <>
    <h1>Add Income</h1>
    
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
				<div className="form-group mb-3">
					<label htmlFor="category-input" className="form-label">
						Category
					</label>
					<input 
						type="text"
						className="form-control"
						id="category-input"
						name="name"
            value={formData.category}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="amount-input" className="form-label">
						Amount
					</label>
					<input 
						type="text"
						className="form-control"
						id="amount-input"
						name="amount"
            value={formData.amount}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="date-input" className="form-label">
						Date
					</label>
					<input 
						type="date"
						className="form-control"
						id="date-input"
						name="date"
            value={formData.date}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="add-income-btn"
            disabled={!validForm}
					>
						Add Income
					</button>
				</div>
			</form>
      
    </>
  );
}
 
export default AddIncome;