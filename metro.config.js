const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);


module.exports = config;

const { withNativeWind } = require('nativewind/metro');

module.exports = withNativeWind(config, { input: './global.css' })

config.resolver.sourceExts.push('sql'); // <--- add this