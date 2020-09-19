import MWADLocalStorage from '../types/MWADLocalStorage'

const setLocalStorageObj = (ls?: MWADLocalStorage) => {
  let obj: MWADLocalStorage

  obj = ls ? ls : {
    langs: [],
    timestamp: new Date()
  }

  localStorage.setItem('mwad', JSON.stringify(obj))
}

export default setLocalStorageObj
