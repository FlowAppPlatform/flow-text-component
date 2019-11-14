const ToLowerCase = require('./src/lower-case');
const ToUpperCase = require('./src/upper-case');
const Contains = require('./src/contains');
const Search = require('./src/search');
const Matches = require('./src/matches');
const Split = require('./src/split');
const Slice = require('./src/slice');
const Replace = require('./src/replace');
const StartsWith = require('./src/starts-with');
const EndsWith = require('./src/ends-with');

const Component = {
  ToLowerCase,
  ToUpperCase,
  Contains,
  Search,
  Matches,
  Split,
  Slice,
  Replace,
  StartsWith,
  EndsWith
};

module.exports = Component;