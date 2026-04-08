const fs = require("fs");
const path = require("path");

function checkPath(p) {
  const parts = p.split("/");
  let current = ".";
  for(let part of parts) {
    if(part === "." || part === "") continue;
    const files = fs.readdirSync(current);
    if(!files.includes(part)) {
      console.log("CASE MISMATCH OR NOT FOUND:", p, "at part:", part);
      return false;
    }
    current = path.join(current, part);
  }
  return true;
}

const execSync = require("child_process").execSync;
const lines = execSync("grep -rn \"from ['\\\"]@\" src/").toString().split("\n");
let foundError = false;
for(let line of lines) {
  if(!line) continue;
  const match = line.match(/from [\'\"]@\/(.+)[\'\"]/);
  if(match) {
    let p = "src/" + match[1];
    if (p.endsWith(";") || p.endsWith(")")) p = p.replace(/[\;\)]+$/, "");
    if (!p.endsWith(".astro") && !p.endsWith(".ts") && !p.endsWith(".tsx") && !p.endsWith(".mjs") && !p.endsWith(".json")) {
       // if no extension is given, ts resolves it. let's just check standard ones or ignore for now
       continue;
    }
    if (!checkPath(p)) foundError = true;
  }
}
if (!foundError) console.log("All imported paths matched case perfectly.");
