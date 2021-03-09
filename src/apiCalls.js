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

export const postNewUrls= () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Sorry we are having trouble adding you new url')
      }
    })
}