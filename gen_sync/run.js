'use strict';

const isPrpmise = obj => typeof obj !== 'undefined' && typeof obj.then === 'function';

// Next, we’ll need a way to iterate through the generator’s `.next()` calls, 
// unwrap the promises, and wait for them to resolve before calling `.next()` again. 
// Here’s a straightforward approach with no error handling. This is just a demonstration of the idea.
// You don’t want to use this in production your errors would get swallowed, and it would be very hard to debug what’s going on:

const next = (iter, callback, prev = undefined) => {
  const item = iter.next(prev);
  const value = item.value;
  if(item.done) return callback(prev);
  if(isPrpmise(value)) {
    value.then(val => {
      setImmediate(() => next(iter, callback, val));
    });
  } else {
    setImmediate(() => next(iter, callback, value));
  }
}