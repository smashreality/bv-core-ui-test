import { camelize, getInitials, pluralize, pascalize, wordize } from "./string";
describe("getInitials", () => {
  it("returns empty string for empty name", () => {
    const result = getInitials("");
    expect(result).toBe("");
  });

  it("returns the first letter of each word for the given name", () => {
    const result = getInitials("John Doe");
    expect(result).toBe("JD");
  });

  it("only returns first two letters of the name", () => {
    const result = getInitials("John Smith Doe");
    expect(result).toBe("JS");
  });
});

describe("pluralize", () => {
  it("should return the noun with a 's' suffix if count is not 1", () => {
    const count = 2;
    const noun = "book";
    const result = pluralize(count, noun);
    expect(result).toEqual("books");
  });

  it("should return the noun without any suffix if count is 1", () => {
    const count = 1;
    const noun = "book";
    const result = pluralize(count, noun);
    expect(result).toEqual("book");
  });

  it("should return the noun with a custom suffix if passed", () => {
    const count = 2;
    const noun = "book";
    const suffix = "-es";
    const result = pluralize(count, noun, suffix);
    expect(result).toEqual("book-es");
  });
});

describe("camelize", () => {
  it("should return the camelcase", () => {
    expect(camelize("hello world")).toEqual("helloWorld");
    expect(camelize("Hello World")).toEqual("helloWorld");
    expect(camelize("helloWorld")).toEqual("helloWorld");
  });
});

describe("pascal", () => {
  it("should return the camelcase", () => {
    expect(pascalize("some_database_field_name")).toEqual(
      "SomeDatabaseFieldName"
    );
    expect(pascalize("Some label that needs to be pascalized")).toEqual(
      "SomeLabelThatNeedsToBePascalized"
    );
    expect(pascalize("some-javascript-property")).toEqual(
      "SomeJavascriptProperty"
    );
    expect(
      pascalize("some-mixed_string with spaces_underscores-and-hyphens")
    ).toEqual("SomeMixedStringWithSpacesUnderscoresAndHyphens");
  });
});

describe("pascalize", () => {
  it("should return the camelcase", () => {
    expect(pascalize("some_database_field_name")).toEqual(
      "SomeDatabaseFieldName"
    );
    expect(pascalize("Some label that needs to be pascalized")).toEqual(
      "SomeLabelThatNeedsToBePascalized"
    );
    expect(pascalize("some-javascript-property")).toEqual(
      "SomeJavascriptProperty"
    );
    expect(
      pascalize("some-mixed_string with spaces_underscores-and-hyphens")
    ).toEqual("SomeMixedStringWithSpacesUnderscoresAndHyphens");
  });
});

describe("wordize", () => {
  it("should return the camelcase", () => {
    expect(wordize("SomeDatabaseFieldName")).toEqual(
      "Some Database Field Name"
    );

    expect(wordize("some DatabaseFieldName")).toEqual(
      "some Database Field Name"
    );
  });
});
