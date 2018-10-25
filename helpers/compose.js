// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
module.exports = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
