import addingPies from "../common/testFunctions";

describe("This is just a sample test", () => {
  it("should pass easily", () => {
    expect(45 * 10).toEqual(450);
  });
});

describe("Testing sample function", () => {
  it("should work as expected", () => {
    expect(addingPies(7, 10)).toEqual(17);
  });
});
