// function interpolate(literals, ...expressions) {
//     let string = ``
//     for (const [i, val] of expressions.entries()) {
//       string += literals[i] + val
//     }
//     string += literals[literals.length - 1]
//     return string
//   }

// const interpolated = `I paid ${10}€`
// console.log(interpolated);

// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   }

// console.log(sum(0,1,2));
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({max,min}) => (max+min) / 2.0;

console.log(half(stats));