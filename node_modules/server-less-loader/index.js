/**
 * @fileOverview index.js
 * @author Max
 **/

var path = require('path');
var trim = require('lodash.trim');

module.exports = function(source) {
    this.cacheable();

    var options = this.options.serverLessLoader;

    var pieces = source.split('\n');
    for(var i in pieces) {
        var startIndex = pieces[i].indexOf(options.loader);
        if(startIndex !== -1) {
            var argumentStr = '';
            var inArgument = false;
            for(var j = startIndex, length = pieces[i].length; j < length; j++) {
                if(pieces[i][j] === ')') {
                    inArgument = false;
                }
                if(inArgument) {
                    argumentStr += pieces[i][j];
                }
                if(pieces[i][j] === '(') {
                    inArgument = true;
                }
            }
            var argumentPieces = argumentStr.split(',');
            var trimFilePathArg = trim(argumentPieces[0]);
            var filePathArg = trimFilePathArg.substr(1, trimFilePathArg.length - 2);

            pieces[i] = pieces[i].replace(options.loader, 'require');
            pieces[i] = pieces[i].replace(argumentStr, '\'' + filePathArg + '.less' + '\'');
        }
    }

    return pieces.join('\n');
};
