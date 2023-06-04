module.exports = {
  presets: [
    '@babel/preset-env', // Transpile JavaScript features based on browser compatibility
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties', // Transforms class properties syntax
    '@babel/plugin-proposal-object-rest-spread', // Transforms object rest/spread properties syntax
    '@babel/plugin-transform-runtime', // Adds support for async/await and other features
  ],
};
