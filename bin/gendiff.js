#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/index.js';

const command = () => { };

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(gendiff)
  .parse(process.argv);
