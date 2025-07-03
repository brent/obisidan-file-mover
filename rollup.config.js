import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const isProd = process.env.BUILD === 'production';

export default {
  input: 'main.ts', // Your main plugin file
  output: {
    dir: '.', // Output to the current directory (plugin root)
    sourcemap: isProd ? false : true, // Generate sourcemap for debugging in development
    format: 'cjs', // CommonJS format for Obsidian plugins
    exports: 'default',
  },
  external: ['obsidian'], // Mark 'obsidian' as an external dependency (provided by Obsidian)
  plugins: [
    typescript(), // Transpile TypeScript
    nodeResolve({ browser: true }), // Resolve node modules for browser environment
    commonjs(), // Convert CommonJS modules to ES6
  ],
};
