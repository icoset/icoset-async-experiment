import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/icon-test.tsx',
    output: {
      dir: './',
      format: 'commonjs',
      name: 'icon-test',
    },
    external: ['react'],
    plugins: [typescript(), commonjs(), resolve()],
  },
  // {
  //   input: 'src/lipid-react-hook-generator.ts',
  //   output: {
  //     dir: './',
  //     format: 'commonjs',
  //     name: 'lipidReactHookGenerator',
  //   },
  //   external: ['react'],
  //   plugins: [typescript()]
  // }
];
