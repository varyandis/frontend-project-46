import path from 'node:path'
import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'

const parseFile = (filepath) => {
  const fullPath = path.resolve(filepath)
  const format = path.extname(fullPath)
  const content = readFileSync(fullPath, 'utf-8')

  switch (format) {
    case '.json':
      return JSON.parse(content)
    case '.yaml':
    case '.yml':
      return yaml.load(content)
    default:
      throw new Error(`The format ${format} is not supported`)
  }
}

export default parseFile
