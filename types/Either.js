const Right = x => ({
  map: (f) => Right(f(x)),
  chain: (f) => f(x), // Not wrapping again into a Right
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: (f) => Left(x),
  chain: (f) => f(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
}

const Either = { Right, Left, tryCatch };

module.exports = Either;
