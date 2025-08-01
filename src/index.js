import parseFile from './parseFile.js'

export default function gendiff(filepath1, filepath2) {
  const obj1 = parseFile(filepath1)
  const obj2 = parseFile(filepath2)

  console.log(obj1)
  console.log(obj2)
}
