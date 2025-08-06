import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import gendiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const file1 = getFixturePath('file1.json')
const file2 = getFixturePath('file2.json')
const file3 = getFixturePath('file3.yml')
const file4 = getFixturePath('file4.yml')
const expected = readFile('expected.txt')
const expectedPlain = readFile('expectedPlain.txt')

test('gendiff compares JSON files', () => {
  expect(gendiff(file1, file2)).toBe(expected)
})

test('gendiff compares YAML files', () => {
  expect(gendiff(file3, file4)).toBe(expected)
})

test('gendiff compares files from plain format', () => {
  expect(gendiff(file1, file2, 'plain')).toBe(expectedPlain)
})
