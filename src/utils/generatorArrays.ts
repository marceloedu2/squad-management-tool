export const arrayGenerator = (formation: string) => {
  const object = []
  formation.split('-').map((item, index) => {
    let i = 0
    const array = []
    while (++i <= Number(item)) {
      array[i - 1] = {}
    }
    object[index] = array
  })
  return object as []
}
