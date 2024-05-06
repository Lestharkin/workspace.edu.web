const isEmpty = (value: string): boolean => {
  if(value === null || value === undefined || value === "") {
    return true
  }
  return false
}

export {
  isEmpty
}