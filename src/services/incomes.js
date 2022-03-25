import { getByPlaceholderText } from "@testing-library/react"

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/incomes`

function create(income) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(income)
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export {
  create,
  getAll,
}

