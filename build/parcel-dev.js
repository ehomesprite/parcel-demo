/**
 * created by snowdrop on 2018/5/27
 */

const Bundler = require('parcel-bundler');
const path = require('path');

const file = path.join(__dirname, './src/views/page1/index.html');

const bundler = new Bundler(file, {});

bundler.bundle();