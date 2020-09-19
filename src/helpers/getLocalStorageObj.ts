const getLocalStorageObj = () => {
  let str = localStorage.getItem('mwad')

  if (str === null) {
    localStorage.setItem('mwad', JSON.stringify({
      langs: [],
      date: new Date()
    }))

    str = localStorage.getItem('mwad')
  }

  return JSON.parse(str as string)
}

export default getLocalStorageObj
