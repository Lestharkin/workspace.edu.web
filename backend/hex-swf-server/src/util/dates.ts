const getDate = (date: string): Date => {
  if (date === undefined || date === '') {
    return new Date()
  }
  return new Date(date)
}

export { getDate }
