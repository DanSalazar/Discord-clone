export const createTagOfUser = (num) => {
  const TAGS_UNITS = ['', '0', '00', '000']
  const calcTag = Math.abs(num.length - 4)

  return `#${TAGS_UNITS[calcTag]}${num}`
}