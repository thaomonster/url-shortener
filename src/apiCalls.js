export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Sorry we are having trouble loading your urls')
      }
    })
}

export const postNewUrls = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUrl)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Sorry we are having trouble adding you new url')
      }
    })
}