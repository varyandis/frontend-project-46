const isStr = (value) => {
  return (typeof value === 'string') ? `'${value}'` : value
}

const isComplexValue = (value) => {
  return (value !== null && typeof value === 'object')
    ? '[complex value]'
    : isStr(value)
}

export const plain = (three, prop = '') => {
  const getLines = (node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node

    const newProp = prop ? `${prop}.${key}` : key

    switch (type) {
      case 'added':
        return `Property '${newProp}' was added with value: ${isComplexValue(value)}`
      case 'removed':
        return `Property '${newProp}' was removed`
      case 'unchanged':
        return ''
      case 'changed':
        return `Property '${newProp}' was updated. From ${isComplexValue(oldValue)} to ${isComplexValue(newValue)}`
      case 'nested':
        return plain(children, newProp)
    }
  }
  return three.map(getLines).filter(Boolean).join('\n')
}
