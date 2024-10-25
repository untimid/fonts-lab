import GetGoogleFonts from "get-google-fonts";
import { CONFIG } from "./config.js";
/* EXAMPLE
const fontsMap = [
 {
    Roboto: ["400", 700],
    Roboto: [400, "700i"],
    "Alegreya Sans SC": [300],
  },
  ["cyrillic"],
];
 */
let ggf = new GetGoogleFonts(CONFIG);

const fontsMap = [
  {
    Roboto: ["400", 700],
    Roboto: [400, "700i"],
  },
  ["cyrillic"],
];

ggf
  .download(fontsMap)
  .then(() => {
    console.log("Done!");
  })
  .catch(() => {
    console.log("Whoops!");
  });
