const functions = require("./methods");

test("Capitalization", () =>{
    expect(functions.capitalize("rug")).toBe("Rug")
});

test ("ReverseString", () =>{
    expect(functions.reverseString("Hello")).toBe("olleH")
});


