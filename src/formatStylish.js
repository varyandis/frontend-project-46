export const formatStylish = (diff) => {
  const indent = '  '
  const sign = {
    unchanged: ' ',
    removed: '-',
    added: '+',
  }

  const getStr = (str) => {
    const formatLine = (key, value, sign) => {
      return `${indent}${sign} ${key}: ${value}`
    }
    const type = str.type
    switch (type) {
      case 'unchanged':
        return formatLine(str.key, str.value, sign.unchanged)
      case 'removed':
        return formatLine(str.key, str.value, sign.removed)
      case 'added':
        return formatLine(str.key, str.value, sign.added)
      case 'changed':
        return `${formatLine(str.key, str.oldValue, sign.removed)}\n${formatLine(str.key, str.newValue, sign.added)}`
      default:
        throw new Error(`Unknown diff type: ${str.type}`)
    }
  }

  const result = diff.map(getStr).join('\n')
  return `{\n${result}\n}`
}
