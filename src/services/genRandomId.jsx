const genRandomId = () => (
  `_${Math.random().toString(36).substring(2, 15)}`
)

export default genRandomId
