import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const fs = require('fs');
const path = require('path');

const input = 'src/index.js';

const output = [{
  dir: 'dist',
  format: 'es',
  entryFileNames: 'app.es.js',
}, {
  dir: 'dist',
  format: 'cjs',
  entryFileNames: 'app.cjs.js',
}, {
  dir: 'dist',
  format: 'amd',
  entryFileNames: 'app.amd.js',
}];

export default {
  input,
  output,
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ presets: ["@babel/preset-env"], babelHelpers: 'bundled' }),
    terser(),
  ],
};