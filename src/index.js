import parseFile from './parseFile.js'
import { buildDiff } from './buildDiff.js'
import { formattedDiff } from './formatters/index.js'

export default function gendiff(filepath1, filepath2, format = 'stylish') {
  const obj1 = parseFile(filepath1)
  const obj2 = parseFile(filepath2)
  const diffTree = buildDiff(obj1, obj2)

  return formattedDiff(diffTree, format)
}
