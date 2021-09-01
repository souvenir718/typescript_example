// import { RangeIterable } from "./RangeIterable";

import { StringIterable } from "./StringIterable";

// const iterator = new RangeIterable(1, 4);
// for (let value of iterator) console.log(value);

for (const value of new StringIterable(["hello", "word", "!"])) {
    console.log(value);
}
