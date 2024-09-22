const functions = require("./methods");


test("Capitalization", () =>{
    expect(functions.capitalize("rug")).toBe("Rug")
});

test ("ReverseString", () =>{
    expect(functions.reverseString("Hello")).toBe("olleH")
});

test ("Calc addition", () =>{
    expect(functions.Caclulator.addition(1,3)).toBe(4)
});

test ("Calc division", () =>{
    expect(functions.Caclulator.division(4,2)).toBe(2)
});

test ("Calc multiplication", () =>{
    expect(functions.Caclulator.multiplication(6,3)).toBe(18)
});


