const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/budgets`

function create(budget) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(budget)
  })
	.then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export {
	create
}