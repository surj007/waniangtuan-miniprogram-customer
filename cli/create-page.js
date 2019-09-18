const fs = require('fs');
const path = require('path');

const pageName = process.env.npm_config_name;
const pagePath = path.join(__dirname, '../miniprogram/pages/' + pageName);

try {
  if (fs.existsSync(pagePath)) {
    console.error('page exist');

    return;
  }

  fs.mkdirSync(pagePath);
  fs.writeFileSync(path.join(pagePath, pageName + '.ts'), `//${pageName}.js`);
  fs.writeFileSync(path.join(pagePath, pageName + '.js'), '');
  fs.writeFileSync(path.join(pagePath, pageName + '.json'), '{\n  "usingComponents": {}\n}');
  fs.writeFileSync(path.join(pagePath, pageName + '.wxml'), `<!--${pageName}.wxml-->`);
  fs.writeFileSync(path.join(pagePath, pageName + '.wxss'), `/**${pageName}.wxss**/`);
} 
catch (err) {
  console.error(err);
}