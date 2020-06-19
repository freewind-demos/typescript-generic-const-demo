// Generic type happens to be a function
type GenericType<TValue> = (value: TValue) => void;
const aaa: GenericType<number> = (value) => { // value is number
}

// Type of a generic function
type GenericFunction = <TValue>(value: TValue) => void;
const bbb: GenericFunction = <TValue>(value: TValue) => { // generic function
}
