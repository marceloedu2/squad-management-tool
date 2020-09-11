export const initialLetterName = name => {
  const nameArray = name.replace(/\s(de|da|dos|das)\s/g, ' ').split(' ')

  return `${nameArray[0] && nameArray[0].substr(0, 1).toUpperCase()}${
    nameArray[1] && nameArray[1].substr(0, 1).toUpperCase()
  }`
}
