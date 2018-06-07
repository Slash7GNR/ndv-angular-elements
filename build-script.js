const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/ndv-angular-elements/runtime.js',
        './dist/ndv-angular-elements/polyfills.js',
        './dist/ndv-angular-elements/main.js'
    ]

    await fs.ensureDir('elements');
    await concat(files, 'elements/ndv-elements.js');
})()