/* eslint-disable @typescript-eslint/no-require-imports */
const modern = require("brace-expansion-modern");

const expand = modern.expand || modern;

// Older minimatch releases call the module directly; newer releases use .expand.
module.exports = expand;
module.exports.expand = expand;
