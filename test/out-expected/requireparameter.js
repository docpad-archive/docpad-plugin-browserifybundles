require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"aI5kVt":[function(require,module,exports){
/**
 * This file is ignored by Browserify.
 */
var hello = "world";

module.exports = 'nobrowserify ' + hello;

},{}],"nobrowser":[function(require,module,exports){
module.exports=require('aI5kVt');
},{}],3:[function(require,module,exports){
var nobrowserify = require('./nobrowserify')
console.log('requirenobrowserify.js ' + nobrowserify);
},{"./nobrowserify":"aI5kVt"}],4:[function(require,module,exports){
var nobrowser = require('nobrowser');
console.log('requireparameter.js' + nobrowser);

var requirenobrowserify = require('./requirenobrowserify.js');
console.log('requireparameter.js' + requirenobrowserify);
},{"./requirenobrowserify.js":3,"nobrowser":"aI5kVt"}]},{},[4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9yb2IvRG9jdW1lbnRzL2RvY3BhZC1wbHVnaW4tYnJvd3NlcmlmeWJ1bmRsZXMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3JvYi9Eb2N1bWVudHMvZG9jcGFkLXBsdWdpbi1icm93c2VyaWZ5YnVuZGxlcy90ZXN0L291dC9ub2Jyb3dzZXJpZnkuanMiLCIvaG9tZS9yb2IvRG9jdW1lbnRzL2RvY3BhZC1wbHVnaW4tYnJvd3NlcmlmeWJ1bmRsZXMvdGVzdC9vdXQvcmVxdWlyZW5vYnJvd3NlcmlmeS5qcyIsIi9ob21lL3JvYi9Eb2N1bWVudHMvZG9jcGFkLXBsdWdpbi1icm93c2VyaWZ5YnVuZGxlcy90ZXN0L291dC9yZXF1aXJlcGFyYW1ldGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogVGhpcyBmaWxlIGlzIGlnbm9yZWQgYnkgQnJvd3NlcmlmeS5cbiAqL1xudmFyIGhlbGxvID0gXCJ3b3JsZFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICdub2Jyb3dzZXJpZnkgJyArIGhlbGxvO1xuIiwidmFyIG5vYnJvd3NlcmlmeSA9IHJlcXVpcmUoJy4vbm9icm93c2VyaWZ5JylcbmNvbnNvbGUubG9nKCdyZXF1aXJlbm9icm93c2VyaWZ5LmpzICcgKyBub2Jyb3dzZXJpZnkpOyIsInZhciBub2Jyb3dzZXIgPSByZXF1aXJlKCdub2Jyb3dzZXInKTtcbmNvbnNvbGUubG9nKCdyZXF1aXJlcGFyYW1ldGVyLmpzJyArIG5vYnJvd3Nlcik7XG5cbnZhciByZXF1aXJlbm9icm93c2VyaWZ5ID0gcmVxdWlyZSgnLi9yZXF1aXJlbm9icm93c2VyaWZ5LmpzJyk7XG5jb25zb2xlLmxvZygncmVxdWlyZXBhcmFtZXRlci5qcycgKyByZXF1aXJlbm9icm93c2VyaWZ5KTsiXX0=
