import { stylish } from './stylish.js'

export const formattedDiff = (three, format) => {
  switch (format) {
    case 'stylish':
      return stylish(three)
    default:
      throw new Error(`Unknown format: ${format}`)
  }
}
