import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
// Will
import { nodeResolve } from '@rollup/plugin-node-resolve';
// This will check all ESLinting while compiling.
// Useful because will notify if anything should be fixed.
// import { eslint } from 'rollup-plugin-eslint';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    // eslint(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    // CommonJS Must be after babel.
    // https://github.com/rollup/plugins/tree/master/packages/babel#using-with-rollupplugin-commonjs
    commonjs({
      namedExports: {
        [`${__dirname}/node_modules/esrever/esrever.js`]: ['reverse'],
      },
    }),
    nodeResolve(),
    json(),
  ],
};
