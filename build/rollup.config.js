import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'

// npm 入口文件名
const _fileName = 'test-file'

export default {
  input: 'src/index.ts',
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
    typescript(),
    resolve()
  ]
}
