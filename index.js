'use strict';

// Parse the command line for input parameters
var theArgs = require('minimist')(process.argv.slice(2));
var posArg = theArgs['_'][0];
var theCommand = theArgs['_'][1];

