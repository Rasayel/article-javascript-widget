const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    // adds browser vendor prefixes to style properties
    require('autoprefixer'),
    // minifies the CSS if in production
    isProduction ? require('cssnano') : null,
  // removes any null elements we may have because of the conditional
  ].filter(Boolean),
};
