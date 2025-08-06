import { plain } from './plain.js'
import { stylish } from './stylish.js'

export const formattedDiff = (three, format) => {
  switch (format) {
    case 'stylish':
      return stylish(three)
    case 'plain':
      return plain(three)
    case 'json':
      return JSON.stringify(three)
    default:
      throw new Error(`Unknown format: ${format}`)
  }
}
