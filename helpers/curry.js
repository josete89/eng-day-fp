// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
module.exports = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};
