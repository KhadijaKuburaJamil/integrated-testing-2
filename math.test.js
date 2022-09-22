const {sum, divide, multiply, substract} = require("./math");


beforeAll(() =>{
    console.log("Before All Text");
});

describe('Functions', () =>{
    beforeEach(() =>{
        console.log("Before Each")
    });
    it("should sum two number", () =>{
        expect(sum(2, 3)).toBe(5)
    });

    it("should subtract two number", () =>{
        expect(substract(5, 3)).toBe(2)
    });

    it("should multiply two number", () =>{
        expect(multiply(3, 3)).toBe(9)
    });

    it("should divide two number", () =>{
        expect(divide(12, 3)).toBe(4)
    });

    afterEach(() =>{
        console.log("After Each Text");
    });
});

afterAll(() =>{
    console.log("After All Text");
});
