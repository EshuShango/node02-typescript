import dotenv from "dotenv-safe";
import add from "@src/math/add";
import subtract from "@src/math/sub";
import multiply from "./math/multiply";
import divide from "./math/divide";

dotenv.config();

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(9,3));

console.log(process.env.USER);


