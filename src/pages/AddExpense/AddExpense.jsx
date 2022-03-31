import { useState, useRef, useEffect } from 'react'
import '../AddIncome/AddIncome&Expense.css'

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
  <main>
    <h2 className="category-title">Add an Expense</h2>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
	    <div className="container">
        <label htmlFor="category-select"></label>
        <select name="category" className = "input" value={formData.category} onChange={handleChange} id="category-select">
            <option name="Health">Health</option>
            <option name="Housing">Housing</option>
            <option name="Grocery">Grocery</option>
            <option name="Bills">Bills</option>
            <option name="Travel">Travel</option>
            <option name="Other">Other</option>
        </select>
	    </div>
		<div className="container">
		<label htmlFor="amount-input" className="form-label">
			$
		</label>
		<input 
      placeholder='Amount'
      size={40}
      max={100000}
		  type="number"
			className="input"
			id="amount-input"
			name="amount"
      value={formData.amount}
      onChange={handleChange}
			required
		/>
		</div>
		<div className="container">
		<label htmlFor="date-input" className="form-label">
      
		</label>
		<input 
			type="date"
			className="input"
			id="date-input"
			name="date"
      value={formData.Date}
      onChange={handleChange}
      
		/>
		</div>
		<div className="container">
		<button type="submit" className="add-btn" disabled={!validForm}>Add Expense</button>
		</div>
		</form>
  </main>
  );
}

export default AddExpense;