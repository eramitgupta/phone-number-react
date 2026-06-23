const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const pkg = require('./package.json');

const external = Object.keys(pkg.peerDependencies || {});

module.exports = [
  {
    input: 'src/index.ts',
    external,
    output: [{ file: 'dist/index.js', format: 'esm', sourcemap: true }],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declaration: false,
          declarationMap: false,
          declarationDir: undefined,
        },
      }),
      resolve({ extensions: ['.mjs', '.js', '.json', '.node', '.ts'] }),
      commonjs(),
    ],
  },
];
