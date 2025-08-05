import parseFile from './parseFile.js'
import { buildDiff } from './buildDiff.js'
import { formatStylish } from './formatStylish.js'

export default function gendiff(filepath1, filepath2) {
  const obj1 = parseFile(filepath1)
  const obj2 = parseFile(filepath2)
  const objTreeDiff = buildDiff(obj1, obj2)
  const diff = formatStylish(objTreeDiff)

  return diff
}
