const getToken = {
  headers: {
    Authorization: `bearer ${localStorage.getItem('token')}`
  }
}

export default getToken
