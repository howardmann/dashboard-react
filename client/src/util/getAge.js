let getAge = (dateStr, today) => {
  let date = today ? new Date(today) : new Date() 
  let msToYear = 1000 * 60 * 60 * 24 * 365
  let diffMs = date - new Date(dateStr)
  return (diffMs / msToYear).toFixed(1)
}

module.exports = getAge