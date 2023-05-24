import { skeleton } from "./object";

test("skeleton() creates a copy of an object with empty values", () => {
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

  const expected = {
    name: "",
    age: 0,
    isActive: false,
    address: {
      street: "",
      city: "",
      state: "",
    },
  };

  expect(skeleton(source)).toEqual(expected);
});

test("skeleton() creates an empty array when the source is an array", () => {
  const source = [1, 2, 3, 4];
  expect(skeleton(source)).toEqual([]);
});
