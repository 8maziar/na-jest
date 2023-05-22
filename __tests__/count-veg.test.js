const countVeg = require("../katas/count-veg");

describe("count vegtables", () => {
  test("returns the number of specific veg from the array", () => {
    const arrayOfVeg = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const vegType = "root";
    const expected = 9;
    expect(countVeg(arrayOfVeg, vegType)).toBe(expected);
  });
  test("returns 0 if array is emptys", () => {
    const arrayOfVeg = [];
    const vegType = "root";
    const expected = 0;
    expect(countVeg(arrayOfVeg, vegType)).toBe(expected);
  });
});
