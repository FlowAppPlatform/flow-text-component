const ToLowerCase = require('./lower-case');
const ToUpperCase = require('./upper-case');
const Contains = require('./contains');
const Search = require('./search');
const Matches = require('./matches');
const Split = require('./split');
const Slice = require('./slice');
const Replace = require('./replace');
const StartsWith = require('./starts-with');
const EndsWith = require('./ends-with');

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