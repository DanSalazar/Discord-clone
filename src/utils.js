export const createTagOfUser = (num) => {
  if (num.length > 4 || isNaN(num)) return '#0001'
  const TAGS_UNITS = ['', '0', '00', '000']
  const calcTag = Math.abs(num.toString().length - 4)

  return `#${TAGS_UNITS[calcTag]}${num}`
}
