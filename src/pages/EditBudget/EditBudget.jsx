import { useState, useEffect, useRef } from "react"
import { useLocation } from 'react-router-dom'

const EditBudget = (props) => {
  const formElement = useRef()

  const location = useLocation()

  const [formData, setFormData] = useState(location.state.budget)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
      formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateBudget(formData)

  }  

	function handleClick() {
    formData.totalLimit = Number(formData.healthLimit)+Number(formData.housingLimit)+Number(formData.groceryLimit)+Number(formData.billsLimit)+Number(formData.travelLimit)
  }


  return (
		<>
			<h1>Edit Budget</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="health-limit-input" className="form-label">
						Health Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="health-limit-input"
						name="healthLimit"
						value={formData.healthLimit}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group mb-3">
					<label htmlFor="categorytotal-input" className="form-label">
						Housing Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="housing-limit-input"
						name="housingLimit"
						value={formData.housingLimit}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group mb-3">
					<label htmlFor="grocery-limit-input" className="form-label">
						Grocery Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="grocery-limit-input"
						name="groceryLimit"
						value={formData.groceryLimit}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group mb-3">
					<label htmlFor="bills-limit-input" className="form-label">
						Bills Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="bills-limit-input"
						name="billsLimit"
						value={formData.billsLimit}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group mb-3">
					<label htmlFor="travel-limit-input" className="form-label">
						Travel Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="travel-limit-input"
						name="travelLimit"
						value={formData.travelLimit}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
						onClick={handleClick}
						disabled={!validForm}
					>
						Edit Budget
					</button>
				</div>
			</form>
		</>
  );
}

export default EditBudget;