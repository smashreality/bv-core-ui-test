`skeleton(source: any)`

The skeleton function creates an empty copy of an object or array. The function takes in two parameters:

`source`: The object or array to be copied.

The function returns a new object or array with the same keys as the source, but with empty values.

## Example

Object

```
const source = {
    name: "John",
    age: 30,
    isActive: true,
    address: {
      street: "Main St",
      city: "Anytown",
      state: "CA",
    },
  };

const emptyCopy = skeleton(source);

console.log(emptyCopy);
// Output: { name: "", age: 0, isActive: false, address: { street: "", city: "", state: "" } }
```

Array

```
const source = [1, 2, 3, 4];
const emptyCopy = skeleton(source, true);
console.log(emptyCopy);
// Output: []
```

## Note

The function only creates a shallow copy of the object and does not copy any methods or properties that are not enumerable. If the source object has nested objects or arrays, the function will create empty copies of those as well.

It also assumes that the source parameter is an object or an array, if it's a different type of variable the function will not work as expected.

Also, the function only sets the value to the following types:

- string: ""
- number: 0
- boolean: false

If the property is of a different type, the function will not set any value to the property.
