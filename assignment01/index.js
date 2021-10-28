const child_process = require('child_process');
var fib = require('./fibonacci');

console.log('1: Start');

setTimeout(function () {
  console.log('Fibonacci of 30: ' + fib.calc(30));
  console.log('Fibonacci of -10: ' + fib.calc(-10));
}, 0);


console.log('1: Start');

const newProcess = child_process.spawn('node', ['./fibonacci2.js'], {
  stdio: 'inherit',
});

console.log('3: End');
