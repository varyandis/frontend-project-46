import parseFile from './parseFile.js'

export default function gendiff(filepath1, filepath2) {
  const obj1 = parseFile(filepath1)
  const obj2 = parseFile(filepath2)
  const keys = [...Object.keys(obj1), ...Object.keys(obj2)].sort()
  const uniqKeys = new Set(keys)
  const result = [...uniqKeys].map((key) => {
    const value1 = obj1[key]
    const value2 = obj2[key]
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value1 === obj2[key]) {
      return `    ${key}: ${value1}`
    }
    else if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return `  - ${key}: ${value1}`
    }
    else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return `  + ${key}: ${value2}`
    }
    else {
      return `  - ${key}: ${value1}\n  + ${key}: ${value2}`
    }
  }).join('\n')

  return `{\n${result}\n}`
}
