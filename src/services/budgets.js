const BASE_URL = '/api/budgets'

function create(budget) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(budget)
  })
	.then(res => res.json())
}

export {
	create
}