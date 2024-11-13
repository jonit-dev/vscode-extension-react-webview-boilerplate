const esbuild = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

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
  define: {
    'process.env.NODE_ENV': production ? '"production"' : '"development"'
  }
};

/** @type {import('esbuild').BuildOptions} */
const webviewConfig = {
  entryPoints: ['./src/webview/main.tsx'],
  bundle: true,
  outfile: 'src/webview/dist/webview.js',
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
    'process.env.NODE_ENV': production ? '"production"' : '"development"'
  },
};

// Development server configuration
const devServer = {
  servedir: 'src/webview',
  port: 3000,
  host: 'localhost',
};

async function build() {
  try {
    if (watch) {
      // Development with watch mode
      const extensionCtx = await esbuild.context(extensionConfig);
      await extensionCtx.watch();
      console.log('Extension built successfully - watching for changes...');

      // Only start webview dev server if we're not building the extension alone
      if (!process.argv.includes('--extension-only')) {
        const webviewCtx = await esbuild.context({
          ...webviewConfig,
          plugins: [{
            name: 'reload-plugin',
            setup(build) {
              build.onEnd(result => {
                if (result.errors.length) {
                  console.error('Webview build failed:', result.errors);
                } else {
                  console.log('Webview build succeeded');
                }
              });
            },
          }],
        });

        await webviewCtx.serve(devServer);
        console.log(`Development server running at http://${devServer.host}:${devServer.port}`);
        await webviewCtx.watch();
      }
    } else {
      // One-time build
      console.log('Building extension...');
      await esbuild.build(extensionConfig);
      console.log('Extension built successfully');

      if (!process.argv.includes('--extension-only')) {
        console.log('Building webview...');
        await esbuild.build(webviewConfig);
        console.log('Webview built successfully');
      }
    }
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
