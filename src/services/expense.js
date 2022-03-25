const BASE_URL = '/api/expenses'

function create(expense) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(expense)
  })
  .then(res => res.json())
}

export {
  create,
}