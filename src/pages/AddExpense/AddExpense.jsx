import { useState, useRef, useEffect } from 'react'

const AddExpense = (props) => {
    const formElement = useRef()
    const [validForm, setValidForm] = useState(false)
    const [formData, setFormData] = useState({
      category: 'Health',
      amount: 0, 
      date: new Date().toLocaleDateString()
    })
  
    useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

    const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.handleAddExpense(formData)
    }
  

return ( 
  <>
    <h1>Add Expense</h1>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
	    <div className="form-group mb-3">
        <label htmlFor="category-select">Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} id="category-select">
            <option name="Health">Health</option>
            <option name="Housing">Housing</option>
            <option name="Grocery">Grocery</option>
            <option name="Bills">Bills</option>
            <option name="Travel">Travel</option>
            <option name="Other">Other</option>
        </select>
		</div>
		<div className="form-group mb-3">
		<label htmlFor="amount-input" className="form-label">
			Amount
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
		<div className="form-group mb-4">
		<label htmlFor="date-input" className="form-label">
			Date
		</label>
		<input 
			type="date"
			className="form-control"
			id="date-input"
			name="date"
      value={formData.Date}
      onChange={handleChange}
      
		/>
		</div>
		<div className="d-grid">
		<button type="submit" className="btn btn-primary btn-fluid" disabled={!validForm}>Add Expense</button>
		</div>
		</form>
    </>
  );
}

export default AddExpense;