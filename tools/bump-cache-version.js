const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const version = new Date()
  .toISOString()
  .replace(/[-:TZ.]/g, "")
  .slice(0, 14);

const files = {
  html: path.join(root, "index.html"),
  script: path.join(root, "script.js")
};

function updateFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, "utf8");

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }

  fs.writeFileSync(filePath, content, "utf8");
}

updateFile(files.html, [
  [/style\.css\?v=[^"]+/g, `style.css?v=${version}`],
  [/script\.js\?v=[^"]+/g, `script.js?v=${version}`],
  [/(assets\/images\/[^"]+?)\?v=[^"]+/g, `$1?v=${version}`]
]);

updateFile(files.script, [
  [/const TUDOLIMPO_CACHE_VERSION = ".*?";/, `const TUDOLIMPO_CACHE_VERSION = "${version}";`]
]);

console.log(`Cache version bumped to ${version}`);
