const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const sass = require("sass");

const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");

/** @type {import('esbuild').BuildOptions} */
const extensionConfig = {
  entryPoints: ["./src/extension.ts"],
  bundle: true,
  outfile: "dist/extension.js",
  external: ["vscode"],
  format: "cjs",
  platform: "node",
  target: "node16",
  sourcemap: !production,
  minify: production,
};

/** @type {import('esbuild').BuildOptions} */
const webviewConfig = {
  entryPoints: ["./src/webview/main.tsx"],
  bundle: true,
  outfile: "dist/webview.js",
  format: "iife",
  platform: "browser",
  target: "es2020",
  sourcemap: !production,
  minify: production,
  loader: {
    ".tsx": "tsx",
    ".ts": "tsx",
    ".jsx": "jsx",
    ".js": "jsx",
  },
};

// Development server configuration
const devServer = {
  servedir: "dist",
  port: 3000,
  host: "localhost",
};

// Copy directory recursively
async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

// Compile SCSS to CSS
async function compileSass() {
  const result = sass.compile("src/webview/styles/scss/main.scss", {
    style: production ? "compressed" : "expanded",
    sourceMap: !production,
  });

  await fs.promises.mkdir("dist/styles", { recursive: true });
  await fs.promises.writeFile("dist/styles/main.css", result.css);
}

async function build() {
  try {
    if (watch) {
      // Development mode with hot reload for webview
      const ctx = await esbuild.context({
        ...webviewConfig,
        plugins: [
          {
            name: "reload-plugin",
            setup(build) {
              // Watch SCSS files
              build.onStart(async () => {
                try {
                  await compileSass();
                } catch (err) {
                  console.error("SCSS compilation failed:", err);
                }
              });

              build.onEnd(result => {
                if (result.errors.length) {
                  console.error("Build failed:", result.errors);
                }
              });
            },
          },
        ],
      });

      // Copy static files and compile SCSS
      await Promise.all([
        // Copy index.html
        esbuild.build({
          entryPoints: ["src/webview/index.html"],
          loader: { ".html": "copy" },
          outdir: "dist",
        }),
        // Initial SCSS compilation
        compileSass(),
        // Copy VSCode Elements bundle
        copyDir(
          "node_modules/@vscode-elements/elements/dist",
          "dist/node_modules/@vscode-elements/elements/dist",
        ),
        // Copy external styles
        copyDir("src/webview/styles/external", "dist/styles/external"),
      ]);

      // Start dev server and watch for changes
      await ctx.serve(devServer);
      console.log(
        `Development server running at http://${devServer.host}:${devServer.port}`,
      );
      await ctx.watch();
    } else {
      // Production/Extension build
      console.log("Building extension...");
      await esbuild.build(extensionConfig);
      console.log("Extension built successfully");

      console.log("Building webview...");
      await esbuild.build(webviewConfig);

      // Copy index.html to dist
      await esbuild.build({
        entryPoints: ["src/webview/index.html"],
        loader: { ".html": "copy" },
        outdir: "dist",
      });

      // Compile SCSS for production
      await compileSass();

      // Copy external styles for production
      await copyDir("src/webview/styles/external", "dist/styles/external");

      console.log("Webview built successfully");
    }
  } catch (err) {
    console.error("Build failed:", err);
    process.exit(1);
  }
}

build();
