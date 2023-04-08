import add from "@src/math/add";
import dotenv from "dotenv";

describe("This is a test", () => {
  it("should pass", ()=>{
    expect(add(1, 2)).toBe(3);
  })
});