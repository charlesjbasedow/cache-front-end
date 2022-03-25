const AddExpense = () => {
    return ( 
        <>
            <h1>Add Expense</h1>
            <form autoComplete="off">
				<div className="form-group mb-3">
                <label for="category-select">Category:</label>
                    <select name="category" id="category-select">
                    <option value="HOU" selected>Housing</option>
                    <option value="FOD">Food</option>
                    <option value="BIL">Bills</option>
                    <option value="HLT">Health</option>
                    <option value="ENT">Entertainment</option>
                    <option value="SHP">Shopping</option>
                    <option value="TRV">Travel</option>
                    <option value="OTH">Other</option>
                    </select>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Amount(required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="amount-input"
						name="amount"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="date-input" className="form-label">
						Date
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Expense
					</button>
				</div>
			</form>
        </>
     );
}
 
export default AddExpense;