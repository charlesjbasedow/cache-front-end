import { useState, useRef, useEffect } from "react";
import '../AddIncome/AddIncome&Expense.css'

const AddBudget = (props) => {
const [validForm, setValidForm] = useState(false)

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let monthName = month[d.getMonth()];
let dateYear =  new Date().getFullYear();

  const [formData, setFormData] = useState({
    year: dateYear,
    month: monthName,
    totalLimit: 0,
    healthLimit: 0,
    housingLimit: 0,
    groceryLimit: 0,
    billsLimit: 0,
    travelLimit: 0
  })

  function handleClick() {
    formData.totalLimit = Number(formData.healthLimit)+Number(formData.housingLimit)+Number(formData.groceryLimit)+Number(formData.billsLimit)+Number(formData.travelLimit)
  }

  const formElement = useRef()

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddBudget(formData)
  }
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return( 
    <>

      <h1 className="category-title">Add Budget</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>

        <div className="container">
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

        <div className="container">
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

        <div className="container">
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

        <div className="container">
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

        <div className="container">
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

        <div className="container">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            onClick={handleClick}
            disabled={!validForm}
          >
            Add Budget
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBudget;
