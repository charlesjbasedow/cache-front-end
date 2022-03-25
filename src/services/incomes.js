const BASE_URL = '/api/incomes'

function create(income) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(income)
  })
  .then(res => res.json())
}

export {
  create,
  
}

