const fs = require('fs');
const path = require('path');

try {
  fs.writeFileSync(path.join(__dirname, '../miniprogram/env.ts'), `export default '${process.env.NODE_ENV}';`);
} 
catch(err) {
  console.error(err);
}