#!/usr/bin/env node
const waitFor = require('../wait-for')

const prog = require('caporal');
prog
  .version('1.0.0')
  .command('url', 'Wait for an url')
  .argument('<url>', 'Url to wait for', prog.STRING)
  .option('--find <string>', 'Find <string> in url before continuing', prog.STRING)
  .option('--timeout <int>', 'How many ms to wait before retrying', prog.INT, '2500')
  .option('--max-retries <int>', 'How many retries before giving up', prog.INT, '100')
  .action(function({url}, options, logger) {
    waitFor(url, options)
  });

prog.parse(process.argv);
