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
};

// Development server configuration
const devServer = {
  servedir: 'dist',
  port: 3000,
  host: 'localhost',
};

async function build() {
  try {
    if (watch) {
      // Development mode with hot reload for webview
      const ctx = await esbuild.context({
        ...webviewConfig,
        plugins: [{
          name: 'reload-plugin',
          setup(build) {
            build.onEnd(result => {
              if (result.errors.length) {
                console.error('Build failed:', result.errors);
              } 
            });
          },
        }],
      });

      // Copy index.html to dist
      await esbuild.build({
        entryPoints: ['src/webview/index.html'],
        loader: { '.html': 'copy' },
        outdir: 'dist',
      });

      // Start dev server and watch for changes
      await ctx.serve(devServer);
      console.log(`Development server running at http://${devServer.host}:${devServer.port}`);
      await ctx.watch();
    } else {
      // Production/Extension build
      console.log('Building extension...');
      await esbuild.build(extensionConfig);
      console.log('Extension built successfully');

      console.log('Building webview...');
      await esbuild.build(webviewConfig);
      
      // Copy index.html to dist
      await esbuild.build({
        entryPoints: ['src/webview/index.html'],
        loader: { '.html': 'copy' },
        outdir: 'dist',
      });
      
      console.log('Webview built successfully');
    }
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
