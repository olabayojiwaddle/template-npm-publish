import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';

const devMode = process.env.NODE_ENV !== 'production';

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'module',
        sourcemap: true,
        strict: false,
        terser: terser({
            ecma: 2020,
            mangle: {
                toplevel: true,
            },
            compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode,
            },
        }),
    },
    plugins: [typescript()],
    external: ['react', 'react-dom'],
};
