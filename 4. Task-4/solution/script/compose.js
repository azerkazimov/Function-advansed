// Composition & Currying

export const compose =
  (...func) =>
  (value) => {
    return func.reduce((acc, func) => func(acc), value);
  };
