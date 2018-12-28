const withPlugins = require('next-compose-plugins');

const css = require('@zeit/next-css');
const fonts = require('next-fonts');

module.exports = withPlugins([ [ css ], [ fonts ] ]);
