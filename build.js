const postCssPlugin = require("esbuild-style-plugin");

require("esbuild")
  .build({
    entryPoints: ["src/ts/index.ts"],
    outdir: "public",
    bundle: true,
    minify: true,
    plugins: [
      postCssPlugin({
        postcss: {
          plugins: [require("tailwindcss")],
        },
      }),
    ],
  })
  .catch(() => {
    console.error(`Build error: ${error}`);
    process.exit(1);
  });
