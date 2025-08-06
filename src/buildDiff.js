const isObject = (value) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export const buildDiff = (obj1, obj2) => {
  const keys = [...Object.keys(obj1), ...Object.keys(obj2)]
  const uniqueSortedKeys = keys.filter((key, index) => keys.indexOf(key) === index).sort((a, b) => a.localeCompare(b))

  const getDiffKey = (key) => {
    const oldValue = obj1[key]
    const newValue = obj2[key]

    const valueIsObject = isObject(oldValue) && isObject(newValue)

    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && valueIsObject) {
      return { key, type: 'nested', children: buildDiff(oldValue, newValue) }
    }
    else if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { key, type: 'removed', value: oldValue }
    }
    else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return { key, type: 'added', value: newValue }
    }
    else if (oldValue === newValue) {
      return { key, type: 'unchanged', value: oldValue }
    }
    else if (oldValue !== newValue) {
      return { key, type: 'changed', newValue, oldValue }
    }
  }

  return uniqueSortedKeys.map(getDiffKey)
}
