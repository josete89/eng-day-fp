const compose = (fn,...fns) => (...args) => fns.reduce( (acc, fn) => fn(acc), fn(...args));

module.exports = compose