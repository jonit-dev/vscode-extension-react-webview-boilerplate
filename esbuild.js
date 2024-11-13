const esbuild = require('esbuild');

const production = process.argv.includes('--production');

/** @type {import('esbuild').BuildOptions} */
const webviewConfig = {
  entryPoints: ['./src/webview/main.tsx'],
  bundle: true,
  outfile: 'src/webview/dist/webview.js',
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  sourcemap: true,
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

// Development server configuration
const devServer = {
  servedir: 'src/webview',
  port: 3000,
  host: 'localhost',
};

async function build() {
  try {
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

    // Start dev server and watch for changes
    await ctx.serve(devServer);
    console.log(`Development server running at http://${devServer.host}:${devServer.port}`);
    
    // Watch for changes
    await ctx.watch();

  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
