// import { RangeIterable } from "./RangeIterable";

// const iterator = new RangeIterable(1, 4);
// for (let value of iterator) console.log(value);

// import { StringIterable } from "./StringIterable";
// for (const value of new StringIterable(["hello", "word", "!"])) {
//     console.log(value);
// }

// import { generator } from "./generator";
// for (const value of generator()) {
//     console.log(value);
// }

// import { rangeGenerator } from "./rangeGenerator";
// let iterator = rangeGenerator(1, 4);
// while (1) {
//     const { value, done } = iterator.next();
//     if (done) break;
//     console.log(value);
// }
// for (let value of rangeGenerator(4, 7)) {
//     console.log(value);
// }

import { IterableUsigGenerator } from "./IterableUsingGenerator";
for (const item of new IterableUsigGenerator([1, 2, 3])) {
    console.log(item);
}
for (const item2 of new IterableUsigGenerator(["hello", "world", "!"])) {
    console.log(item2);
}
