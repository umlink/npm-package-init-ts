import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// npm 入口文件名
const _fileName = 'index'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/${_fileName}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/${_fileName}.amd.js`,
      format: 'amd'
    },
    {
      file: `dist/${_fileName}.es.js`,
      format: 'esm'
    },
    {
      file: `dist/${_fileName}.umd.js`,
      format: 'umd',
      name: _fileName
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
  ].concat(process.env.CODE_ENV === 'production' ? terser() : '')
}
