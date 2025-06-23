const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);


module.exports = config;

const { withNativeWind } = require('nativewind/metro');

config.resolver.sourceExts.push('sql'); // <--- add this

module.exports = withNativeWind(config, { input: './global.css' })