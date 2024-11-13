const esbuild = require('esbuild');

const watch = process.argv.includes('--watch');
const production = process.argv.includes('--production');

/** @type {import('esbuild').BuildOptions} */
const extensionConfig = {
  entryPoints: ['./src/extension.ts'],
  bundle: true,
  outfile: 'dist/extension.js',
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  target: 'node16',
  sourcemap: !production,
  minify: production,
};

/** @type {import('esbuild').BuildOptions} */
const webviewConfig = {
  entryPoints: ['./src/webview/main.tsx'],
  bundle: true,
  outfile: 'dist/webview.js',
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  sourcemap: !production,
  minify: production,
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
    '.jsx': 'jsx',
    '.js': 'jsx',
  },
  define: {
    'process.env.NODE_ENV': production ? '"production"' : '"development"',
  },
};

async function build() {
  try {
    console.log('Building extension...');
    const extensionResult = await esbuild.build(extensionConfig);
    console.log('Extension build complete:', extensionResult);

    console.log('Building webview...');
    const webviewResult = await esbuild.build(webviewConfig);
    console.log('Webview build complete:', webviewResult);

    if (watch) {
      console.log('Watching for changes...');
      const extensionCtx = await esbuild.context(extensionConfig);
      const webviewCtx = await esbuild.context(webviewConfig);

      await Promise.all([extensionCtx.watch(), webviewCtx.watch()]);
    }
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
