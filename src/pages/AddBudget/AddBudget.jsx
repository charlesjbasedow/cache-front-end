const AddBudget = () => {
  return( 
    <>
      <h1>Add Budget</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="budget-input" className="form-label">
						Budget Category (required)
					</label>
					<select name="category">
            <option value="Health">Health</option>
            <option value="Housing">Housing</option>
            <option value="Grocery">Grocery</option>
            <option value="Bills">Bills</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="categorytotal-input" className="form-label">
						Category Limit (required)
					</label>
					<input 
						type="number"
						className="form-control"
						id="categorytotal-input"
						name="categoryLimit"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="total-input" className="form-label">
						Total Limit
					</label>
					<input 
						type="number"
						className="form-control"
						id="total-input"
						name="totalLimit"
					/>
				</div>
        <div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Budget
					</button>
				</div>
			</form>
    </>
  );
}

export default AddBudget;