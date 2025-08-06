export const stylish = (diff, depth = 0) => {
  const indentSize = 4
  const getIndent = depth => ' '.repeat(depth * indentSize - 2)
  const getBracketIndent = depth => ' '.repeat(depth * indentSize)

  const signs = {
    added: '+',
    removed: '-',
    unchanged: ' ',
    nested: ' ',
  }

  const stringify = (value, depth) => {
    if (typeof value !== 'object' || value === null) {
      return String(value)
    }

    const entries = Object.entries(value)
    const lines = entries.map(
      ([key, val]) => `${getBracketIndent(depth + 1)}${key}: ${stringify(val, depth + 1)}`,
    )

    return `{\n${lines.join('\n')}\n${getBracketIndent(depth)}}`
  }

  const lines = diff.map((node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node

    switch (type) {
      case 'added':
      case 'removed':
      case 'unchanged':
        return `${getIndent(depth + 1)}${signs[type]} ${key}: ${stringify(value, depth + 1)}`
      case 'changed':
        return [
          `${getIndent(depth + 1)}${signs.removed} ${key}: ${stringify(oldValue, depth + 1)}`,
          `${getIndent(depth + 1)}${signs.added} ${key}: ${stringify(newValue, depth + 1)}`,
        ].join('\n')
      case 'nested':
        return `${getIndent(depth + 1)}${signs.nested} ${key}: ${stylish(children, depth + 1)}`
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n${getBracketIndent(depth)}}`
}
